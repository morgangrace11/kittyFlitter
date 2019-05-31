const time = (state = '', action) => {
  switch (action.type) {
    case 'REPLACE_TIME':
      return action.payload;
    default:
      return state;
  }
};

export default time;
