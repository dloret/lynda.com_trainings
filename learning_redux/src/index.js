import storeFactory from './store';
import { addDay, removeDay, setGoal } from './store/actions';

const store = storeFactory();

store.dispatch(addDay('Heavenly', '2016-12-25'));
store.dispatch(removeDay('2016-12-25'));
store.dispatch(setGoal(20));
