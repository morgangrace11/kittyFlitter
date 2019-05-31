export const replaceList = array => ({
  type: 'REPLACE_LIST',
  payload: array,
});

export const replaceUser = name => ({
  type: 'REPLACE_USER',
  payload: name,
});

export const replaceTime = time => ({
  type: 'REPLACE_TIME',
  payload: time,
});

export const replaceEvent = event => ({
  type: 'REPLACE_EVENT',
  payload: event,
});

export const calenderToggle = toggle => ({
  type: 'CALENDAR_TOGGLE',
  payload: toggle,
});

export const replaceDate = date => ({
  type: 'REPLACE_DATE',
  payload: date,
});

export const editToggle = toggle => ({
  type: 'EDIT_TOGGLE',
  payload: toggle,
});

export const editId = id => ({
  type: 'EDIT_ID',
  payload: id,
});
