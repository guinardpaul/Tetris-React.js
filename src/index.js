import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
