const DeleteEmployeeConfirmation = (state = false, action) => {
  switch (action.type) {
    case "show-conf":
      return true;
    case "hide-conf":
      return false;
    default:
      return state;
  }
};

export default DeleteEmployeeConfirmation;
