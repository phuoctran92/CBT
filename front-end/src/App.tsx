import { useState, memo, useEffect } from 'react';
import { History } from 'history';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import Routes from 'routers';
import { ACCESS_TOKEN } from 'config/constants';

import { useSelector, useDispatch } from 'react-redux';
import { reducerType } from 'store/reducers';
import { setToken } from 'services/configApi';
import LoadingFullPage from 'components/LoadingFullPage'
import PopupErrorMess from 'components/PopupErrorMess'
import PopupSuccess from 'components/PopupSuccess';

// import PopupConfirm from 'components/PopupConfirm';
//import { GET_PROFILE_REQUEST } from 'store/reducers/profile/actionTypes';
//import { IProfileState } from 'store/reducers/profile';
//import { startWatchStorage } from 'services/configApi/configCBTApi';
import { sleep } from 'helpers';

const AppContainer = styled.div`
  height: 100%;
`;

type AppProps = {
  history: History;
};

const App = memo((props: AppProps) => {
  //const dispatch = useDispatch();
  //const profile: IProfileState = useSelector((state: reducerType) => state.profile)
  const isLoading = useSelector((state: reducerType) => state.global.isLoading)
  const token = localStorage.getItem(ACCESS_TOKEN);
  const [isLogin, setIsLogin] = useState(!!token)
  const [isFirstApp, setIsFirstApp] = useState(false);
  const [isRenderApp, setIsRenderApp] = useState(false);


  if (!!token) {
    setToken(token);
    if (!isLogin) setIsLogin(true);
    if (!isFirstApp) {
      setIsFirstApp(true);
      //dispatch({ type: GET_PROFILE_REQUEST })
    }
  }

  // useEffect(() => {
  //   startWatchStorage();
  // }, [])

  useEffect(() => {
    const checkRenderApp = async () => {
      await sleep(1000);
      if (isFirstApp && token) {
        setIsRenderApp(true)
      }
      if (!isFirstApp && !token) {
        setIsRenderApp(true)
      }
    }
    checkRenderApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstApp])

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
});

export default App;
