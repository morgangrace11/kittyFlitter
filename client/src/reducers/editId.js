const id = (state = null, action) => {
  switch (action.type) {
    case 'EDIT_ID':
      return action.payload;
    default:
      return state;
  }
};

export default id;