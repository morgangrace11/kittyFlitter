const username = (state = '', action) => {
  switch (action.type) {
    case 'REPLACE_USER':
      return action.payload;
    default:
      return state;
  }
};

export default username;
