const ChangeEmployeeRoleForm = (state = false, action) => {
  switch (action.type) {
    case "show-form":
      return true;
    case "hide-form":
      return false;
    default:
      return state;
  }
};

export default ChangeEmployeeRoleForm;
