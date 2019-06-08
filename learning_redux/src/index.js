import C from './constants';
import { errors } from './store/reducers';

const state = ['user not authorized', 'server feed not found'];

const action = {
  type: C.ADD_ERROR,
  payload: 'cannot connect to server',
};

const nextState = errors(state, action);

console.log(`
  initial state: ${state}
  action: ${JSON.stringify(action)}
  new state: ${JSON.stringify(nextState)}
`);
