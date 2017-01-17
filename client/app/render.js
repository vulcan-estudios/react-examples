import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from 'client/app/store';
import routes from 'client/app/routes';

const history = syncHistoryWithStore(hashHistory, store);

const render = function () {
  const app = (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
  const root = document.querySelector('#app');
  ReactDOM.render(app, root);
};

export default render;
