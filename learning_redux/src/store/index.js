import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';

const consoleMessages = store => next => (action) => {
  console.groupCollapsed(`dispatching action: ${action.type}`);
  console.log('ski days', store.getState().allSkiDays.length);

  const result = next(action); // dispatches the action

  const {
    allSkiDays, goal, errors, resortNames,
  } = store.getState();
  console.log(`
    ski days: ${allSkiDays.length}
    goal: ${goal}
    fetching: ${resortNames.fetching}
    suggestions: ${resortNames.suggestions}
    errors: ${errors.length}
  `);
  console.groupEnd();

  return result;
};

export default (initialState = {}) => applyMiddleware(consoleMessages)(createStore)(appReducer, initialState);
