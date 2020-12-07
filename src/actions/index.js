export const getUser = (username) => {
  return {
    type: "currentUser",
    payload: username,
  };
};
export const showNewEmployeeForm = () => {
  return {
    type: "show",
  };
};
export const hideNewEmployeeForm = () => {
  return {
    type: "hide",
  };
};
