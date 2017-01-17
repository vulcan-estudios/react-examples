import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app    from './app';
import users  from './users';

export default combineReducers({
  app,
  users,
  routing: routerReducer,
});
