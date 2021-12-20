import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createRootReducer from 'store/reducers';
import middlewares from 'store/middlewares';

export const history = createBrowserHistory();

export const configureStore = (preloadedState?: any) => {
  const isProduction = process.env.REACT_APP_ENV_MODE === 'production';
  const composeEnhancer: typeof compose = (!isProduction && typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(...middlewares(history)))
  );
  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('store/reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
};

const exports = {
  configureStore,
  history
}
export default exports;
