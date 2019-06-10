import { createStore } from 'redux';
import C from './constants';
import appReducer from './store/reducers';
import backupState from './initialState.json';

const initialState = sessionStorage['learning-redux']
  ? JSON.parse(sessionStorage['learning-redux'])
  : backupState;

const store = createStore(appReducer, initialState);

// Logs the store each time the state changes
store.subscribe(() => console.log(store.getState()));
// Stores the state in the session storage each time it changes
store.subscribe(() => {
  const state = JSON.stringify(store.getState());
  sessionStorage['learning-redux'] = state;
});

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: 'Mt Shasta',
    date: '2016-12-21',
    powder: false,
    backcountry: true,
  },
});

store.dispatch({
  type: C.SET_GOAL,
  payload: 2,
});
