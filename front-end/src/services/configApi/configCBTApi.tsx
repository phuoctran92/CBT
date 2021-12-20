import axios from 'axios';
import * as CONSTANTS from 'config/constants';

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
    return response || null;
  },
  error => {
    console.log(error.message);
  }
);


export default AppAPIInstance;