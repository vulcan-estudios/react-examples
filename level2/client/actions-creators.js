import { ACTIONS } from './consts';

export function add (value = 0) {
  return {
    type: ACTIONS.ADD,
    payload: value
  };
}

export function subtract (value = 0) {
  return {
    type: ACTIONS.SUBTRACT,
    payload: value
  };
}
