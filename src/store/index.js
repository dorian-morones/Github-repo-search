import configStore from './store-config';
import {getResults } from './actions';

const store = configStore();
store.dispatch(getResults());

export default store;