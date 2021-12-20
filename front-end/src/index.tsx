import 'react-hot-loader';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore, history } from 'store/configureStore';
import { rootSaga } from 'store/sagas';
import 'index.css';
import App from 'App';
import * as serviceWorker from './serviceWorker';
import sagaMiddleware from 'store/middlewares/saga';

const initialState = {};
const store = configureStore(initialState);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
