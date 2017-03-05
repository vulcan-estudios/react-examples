import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './movies';

export default combineReducers({
  movies,
  routing: routerReducer,
});
