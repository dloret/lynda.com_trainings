import fetch from 'isomorphic-fetch';
import C from './constants';

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

export const removeDay = date => ({
  type: C.REMOVE_DAY,
  payload: date,
});

export const setGoal = goal => ({
  type: C.SET_GOAL,
  payload: goal,
});

export const addError = message => ({
  type: C.ADD_ERROR,
  payload: message,
});

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index,
});

export const changeSuggestions = suggestions => ({
  type: C.CHANGE_SUGGESTIONS,
  payload: suggestions,
});

export const clearSuggestions = () => ({
  type: C.CLEAR_SUGGESTIONS,
});

export const suggestResortNames = value => (dispatch) => {
  dispatch({
    type: C.FETCH_RESORT_NAMES,
  });

  fetch(`http://localhost:3333/resorts/${value}`)
    .then(resp => resp.json())
    .then(json => dispatch({
      type: C.CHANGE_SUGGESTIONS,
      payload: json,
    }))
    .catch((error) => {
      dispatch(addError(error));
      dispatch({
        type: C.CANCEL_FETCHING,
      });
    });
};
