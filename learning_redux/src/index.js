import storeFactory from './store';
import { randomGoals } from './store/actions';

const store = storeFactory();

store.dispatch(randomGoals());
