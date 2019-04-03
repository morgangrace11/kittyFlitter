export const replaceList = array => ({
  type: 'REPLACE_LIST',
  payload: array,
});

export const replaceUser = name => ({
  type: 'REPLACE_USER',
  payload: name,
});
