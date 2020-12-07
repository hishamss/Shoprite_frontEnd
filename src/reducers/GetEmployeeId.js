const GetEmployeeId = (state = -1, action) => {
  switch (action.type) {
    case "id":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default GetEmployeeId;
