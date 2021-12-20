import loggerMiddleware from "store/middlewares/logger";
import routerMiddleware from "store/middlewares/router";
import sagaMiddleware from "store/middlewares/saga";
import { History } from "history";

const exports = (history: History) => {
  const isProduction = process.env.REACT_APP_ENV_MODE === 'production';
  if(isProduction) return [routerMiddleware(history), sagaMiddleware];
  return [routerMiddleware(history), loggerMiddleware, sagaMiddleware];
};

export default exports