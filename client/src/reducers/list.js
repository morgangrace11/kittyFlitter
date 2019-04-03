const list = (state = [], action) => {
  switch (action.type) {
    case 'REPLACE_LIST':
      return [...action.payload];
    default:
      return state;
  }
};

export default list;
