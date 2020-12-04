const currentUserReducer = (state = "", action) => {
  switch (action.type) {
    case "currentUser":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default currentUserReducer;
