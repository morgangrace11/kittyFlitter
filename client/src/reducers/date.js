const date = (state = '', action) => {
  switch (action.type) {
    case 'REPLACE_DATE':
      return action.payload;
    default:
      return state;
  }
};

export default date;
