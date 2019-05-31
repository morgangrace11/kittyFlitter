import { combineReducers } from 'redux';
import list from './list.js';
import username from './username';
import calToggle from './calToggle';
import eToggle from './editToggle';

const rootReducer = combineReducers({
  list,
  username,
  calToggle,
  eToggle,
});

export default rootReducer;
