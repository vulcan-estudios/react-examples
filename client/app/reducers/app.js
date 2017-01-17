import { ACTIONS } from 'client/app/constants';

const initial = {
  loaded: false
};

const reducer = function (state = initial, action) {

  switch (action.type) {

    case ACTIONS.APP_LOAD: {
      return { ...state, loaded: true };
    }

    default:
      return state;
  }
};

export default reducer;
