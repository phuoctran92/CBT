import axios from 'axios';
import * as CONSTANTS from 'config/constants';

let isRefreshing = false;
let failedQueue: any[] = [];

const AppAPIInstance = axios.create({
  baseURL: `${process.env.REACT_APP_CBT_API}`,
});

AppAPIInstance.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
AppAPIInstance.defaults.headers.common['Time-Zone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const setToken = (token: string) => {
  AppAPIInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // AppAPIInstance.defaults.headers.common['token'] = `${token}`;
};

AppAPIInstance.interceptors.response.use(
  response => {
    // if (response && response.data) {
    //   return response.data || null;
    // }
    return response?.data || null;
  },
  error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject })
        }).then(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return AppAPIInstance(originalRequest);
        }).catch(err => {
          return null
        })
      }

      originalRequest._retry = true;
      setIsRefreshing(true)

      return new Promise(function (resolve, reject) {
        getNewToken()
          .then(token => {
            setToken(token)
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            processQueue(null, token);
            return resolve(AppAPIInstance(originalRequest));
          })
          .catch((err) => {
            localStorage.clear();
            const _window: any = window;
            _window.location = "/";
            return reject(err);
          })
          .finally(() => { setIsRefreshing(false) })
      })
    } else if (error.response?.status === 403) {
      localStorage.clear();
      const _window: any = window;
      _window.location = "/";
      return;
    }
    console.log(error.message)
    return Promise.reject(error?.response?.data?.error || error);
  }
);

const processQueue = (error, token = '') => {
  failedQueue.forEach((prom: any) => {
    if (error) { prom.reject(error); }
    else { prom.resolve(token); }
  })
  failedQueue = [];
}

const getNewToken = async () => {

  const tokenData: any = await axios.post(`${process.env.REACT_APP_CBT_API}`).then(r => r.data).catch(() => null);
  if (!tokenData) { return Promise.reject({ error: 'RefreshToken Invalid' }) }

  const token = tokenData.token;
  localStorage.setItem(CONSTANTS.ACCESS_TOKEN, tokenData.token);
  setToken(token);
  return token;
}

export const startWatchStorage = () => {
  window.addEventListener("storage", (event: any) => {
    if (event.storageArea === localStorage) {
      let v;
      try { v = JSON.parse(event.newValue); }
      catch (e) { v = event.newValue; }

      if (event.key === CONSTANTS.isRefreshing) {
        isRefreshing = v;
        if (!v && !!failedQueue?.length) {
          let token = localStorage.getItem(CONSTANTS.ACCESS_TOKEN) || ''
          processQueue(null, token);
        }
      }
    }
  });
}

const setIsRefreshing = (status) => {
  isRefreshing = status;
  localStorage.setItem(CONSTANTS.isRefreshing, status.toString());
}

export default AppAPIInstance;