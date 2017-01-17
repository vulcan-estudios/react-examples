import { createStore } from 'redux';
import reducers from 'client/app/reducers';

let store;

if (process.env.NODE_ENV === 'production') {
  store = createStore(reducers);
}
else {
  store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default store;
