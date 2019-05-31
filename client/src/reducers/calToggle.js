const calToggle = (state = false, action) => {
  switch (action.type) {
    case 'CALENDAR_TOGGLE':
      if (state) {
        return false;
      }
      return true;
    default:
      return state;
  }
};

export default calToggle;
