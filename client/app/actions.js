import axios from 'axios';
import store from 'client/app/store';
import { ACTIONS } from 'client/app/constants';

export default {

  start () {
    axios.
      get('/api/users').
      then(res => {

        const users = res.data;

        store.dispatch({
          type: ACTIONS.USERS_LOAD,
          payload: users
        });

        store.dispatch({
          type: ACTIONS.APP_LOAD
        });
      });
  }
};
