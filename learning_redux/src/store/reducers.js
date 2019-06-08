import C from '../constants';

export const goal = (state = 10, action) => {
  switch (action.type) {
    case C.SET_GOAL:
      return parseInt(action.payload, 10);
    default:
      return state;
  }
};

export const skiDay = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_DAY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, action.payload];
    default:
      return state;
  }
};
