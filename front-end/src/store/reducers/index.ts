import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { globalState, globalReducer } from './global';
import createPersistReducer from 'store/reducers/persist';
import { authenticationReducer, AuthenticationType } from './authentication'

const createRootReducer = (history: History) => {
  const reducers = combineReducers({
    authentication: authenticationReducer,
    router: connectRouter(history),
    global: globalReducer,
  });
  return createPersistReducer(reducers);
};

export interface reducerType {
  authentication: AuthenticationType
  global: globalState;
  router: {
    location: {
      pathname: string;
      search: string;
      hash: string;
    };
    action: string;
  };
}

export default createRootReducer;
