import C from './constants';
import { allSkiDays } from './store/reducers';

const state = [
  {
    resort: 'Kirkwood',
    date: '2016-12-17',
    powder: true,
    backcountry: true,
  },
];

const action = {
  type: C.ADD_DAY,
  payload: {
    resort: 'Boreal',
    date: '2016-12-19',
    powder: true,
    backcountry: false,
  },
};

let nextState = allSkiDays(state, action);

const action2 = {
  type: C.REMOVE_DAY,
  payload: '2016-12-17',
};

nextState = allSkiDays(nextState, action2);

console.log(`
  initial state: ${JSON.stringify(state)}
  action: ${JSON.stringify(action)}
  new state: ${JSON.stringify(nextState)}
`);
