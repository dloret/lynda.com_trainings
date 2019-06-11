import C from '../constants';

export function addDay(resort, date, powder = false, backcountry = false) {
  return {
    type: C.ADD_DAY,
    payload: {
      resort,
      date,
      powder,
      backcountry,
    },
  };
}

export function removeDay(date) {
  return {
    type: C.REMOVE_DAY,
    payload: date,
  };
}

export function setGoal(goal) {
  return {
    type: C.SET_GOAL,
    payload: goal,
  };
}
