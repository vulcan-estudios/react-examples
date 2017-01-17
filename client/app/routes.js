import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'client/app/containers/App';

export default (
  <Route path='/'>
    <IndexRoute component={App} />
    <Route path='/:userId' component={App} />
  </Route>
);
