import C from '../constants';

export const goal = (state = 10, action) => {
  switch (action.type) {
    case C.SET_GOAL: return parseInt(action.payload, 10);
    default: return state;
  }
};

export const next = null;
