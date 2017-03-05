import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './containers/App';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
const root = document.querySelector('#app');

render(app, root);
