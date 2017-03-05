import { ACTIONS } from './consts';

const initial = {
  value: 0
};

const reducer = function (state = initial, action) {
  switch (action.type) {

    case ACTIONS.ADD: {
      const value = state.value + action.payload;
      return { ...state, value };
    }

    case ACTIONS.SUBTRACT: {
      const value = state.value - action.payload;
      return { ...state, value };
    }

    default:
      return state;
  }
};

export default reducer;
