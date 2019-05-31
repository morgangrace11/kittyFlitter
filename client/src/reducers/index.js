import { combineReducers } from 'redux';
import list from './list.js';
import username from './username';
import calToggle from './calToggle';
import eToggle from './editToggle';
import date from './date';
import event from './event';
import time from './time';
import id from './editId';

const rootReducer = combineReducers({
  list,
  username,
  calToggle,
  eToggle,
  date,
  event,
  time,
  id,
});

export default rootReducer;
