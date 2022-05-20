import LoadingFullPage from 'components/LoadingFullPage';
import PopupErrorMess from 'components/PopupErrorMess';
import PopupSuccess from 'components/PopupSuccess';
import { ACCESS_TOKEN } from 'config/constants';
import { ConnectedRouter } from 'connected-react-router';
import { sleep } from 'helpers';
import { History } from 'history';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Routes from 'routers';
import { setToken } from 'services/configApi';
import { startWatchStorage } from 'services/configApi/configCBTApi';
import { reducerType } from 'store/reducers';
import { IProfileState } from 'store/reducers/profile';
// import PopupConfirm from 'components/PopupConfirm';
import { GET_PROFILE_REQUEST } from 'store/reducers/profile/actionTypes';
import styled from 'styled-components';



const AppContainer = styled.div`
  height: 100%;
`;

type AppProps = {
  history: History;
};

const App = (props: AppProps) => {
  const dispatch = useDispatch();
  const profile: IProfileState = useSelector((state: reducerType) => state.profile)
  const isLoading = useSelector((state: reducerType) => state.global.isLoading)
  const token = localStorage.getItem(ACCESS_TOKEN);
  const [isLogin, setIsLogin] = useState(!!token && token !== "undefined")
  const [isFirstApp, setIsFirstApp] = useState(false);
  const [isRenderApp, setIsRenderApp] = useState(false);

  if (token && token !== "undefined") {
    setToken(token);
    if (!isLogin) setIsLogin(true);
    if (!isFirstApp) {
      setIsFirstApp(true);
      dispatch({ type: GET_PROFILE_REQUEST })
    }
  }

  useEffect(() => {
    startWatchStorage();
  }, [])

  useEffect(() => {
    const checkRenderApp = async () => {
      await sleep(1000);
      if (isFirstApp && (token && token !== "undefined")) {
        setIsRenderApp(true)
      }
      if (!isFirstApp && (!token || token === "undefined")) {
        setIsRenderApp(true)
      }
    }
    checkRenderApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstApp, profile])

  if (!isRenderApp) {
    return <LoadingFullPage isFullPage={false} isShow={true} />
  }

  return (
    <AppContainer>
      <LoadingFullPage isFullPage={false} isShow={isLoading} />
      <PopupErrorMess />
      <PopupSuccess />
      <ConnectedRouter history={props.history} >
        <Routes isLoggedIn={isLogin} />
      </ConnectedRouter>
    </AppContainer>
  );
};

export default App;
