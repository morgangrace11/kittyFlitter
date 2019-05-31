const eToggle = (state = false, action) => {
  switch (action.type) {
    case 'EDIT_TOGGLE':
      if (state) {
        return false;
      }
      return true;
    default:
      return state;
  }
};

export default eToggle;
