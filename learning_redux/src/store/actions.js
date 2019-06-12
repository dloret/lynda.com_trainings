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

export function addError(error) {
  return {
    type: C.ADD_ERROR,
    payload: error,
  };
}

export function clearError(index) {
  return {
    type: C.CLEAR_ERROR,
    payload: index,
  };
}

export function changeSuggestions(suggestions) {
  return {
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestions,
  };
}

export function clearSuggestions() {
  return {
    type: C.CLEAR_SUGGESTIONS,
  };
}

export function randomGoals() {
  return (dispatch, getState) => {
    if (!getState().resortNames.fetching) {
      dispatch({
        type: C.FETCH_RESORT_NAMES,
      });

      setTimeout(() => {
        dispatch({
          type: C.CANCEL_FETCHING,
        });
      }, 1500);
    }
  };
}
