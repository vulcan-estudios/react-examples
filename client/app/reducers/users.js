import { ACTIONS } from 'client/app/constants';

const initial = [];

const reducer = function (state = initial, action) {

  switch (action.type) {

    case ACTIONS.USERS_LOAD: {
      const users = action.payload;
      return state.concat(users);
    }

    default:
      return state;
  }
};

export default reducer;
