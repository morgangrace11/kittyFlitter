const event = (state = '', action) => {
  switch (action.type) {
    case 'REPLACE_EVENT':
      return action.payload;
    default:
      return state;
  }
};

export default event;
