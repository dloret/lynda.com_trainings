import { createStore } from 'redux';
import C from './constants';
import appReducer from './store/reducers';

const store = createStore(appReducer);

const unsubscribe = store.subscribe(() => console.log(`   GOAL: ${store.getState().goal}`));

setInterval(() => {
  store.dispatch({
    type: C.SET_GOAL,
    payload: Math.floor(Math.random() * 100),
  });
}, 2000);

setTimeout(() => unsubscribe(), 10000);
