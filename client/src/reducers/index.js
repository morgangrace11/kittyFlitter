import { combineReducers } from 'redux';
import list from './list.js';
import username from './username.js';

const rootReducer = combineReducers({
  list,
  username,
});

export default rootReducer;
