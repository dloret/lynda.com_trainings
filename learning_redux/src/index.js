import C from './constants';
import storeFactory from './store';

const initialState = sessionStorage['learning-redux']
  ? JSON.parse(sessionStorage['learning-redux'])
  : {};

const saveState = () => {
  const state = JSON.stringify(store.getState());
  sessionStorage['learning-redux'] = state;
};

const store = storeFactory(initialState);

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: 'Mt Shasta',
    date: '2016-12-22',
    powder: true,
    backcountry: false,
  },
});

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: 'Opikanoba',
    date: '2016-12-23',
    powder: false,
    backcountry: false,
  },
});

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: 'Sasqwatch city',
    date: '2016-12-24',
    powder: true,
    backcountry: true,
  },
});
