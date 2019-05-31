import { combineReducers } from 'redux';
import list from './list.js';
import username from './username';
import calToggle from './calToggle';
import eToggle from './editToggle';
import date from './date';
import event from './event';

const rootReducer = combineReducers({
  list,
  username,
  calToggle,
  eToggle,
  date,
  event,
});

export default rootReducer;
