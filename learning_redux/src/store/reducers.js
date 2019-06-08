import C from '../constants';

export const goal = (state = 10, action) => {
  switch (action.type) {
    case C.SET_GOAL:
      return parseInt(action.payload, 10);
    default:
      return state;
  }
};

export const skiDay = (state = null, action) => {
  switch (action.type) {
    case C.ADD_DAY:
      return action.payload;
    default:
      return state;
  }
};

export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, action.payload];
    case C.CLEAR_ERROR:
      return state.filter((err, index) => index !== action.payload);
    default:
      return state;
  }
};

export const allSkiDays = (state = [], action) => {
  switch (action.type) {
    case C.ADD_DAY:
      // only add the day if there is no other entry for the same day
      return state.some(skiDay => skiDay.date === action.payload.date)
        ? state
        : [...state, skiDay(null, action)];
    case C.REMOVE_DAY:
      return state.filter(skiDay => skiDay.date !== action.payload);
    default:
      return state;
  }
};
