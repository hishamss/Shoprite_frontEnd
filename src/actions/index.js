export const getUser = (username) => {
  return {
    type: "currentUser",
    payload: username,
  };
};
export const showChangeEmployeeForm = () => {
  return {
    type: "show",
  };
};

export const getEmployeeId = (id) => {
  return {
    type: "id",
    payload: id,
  };
};
export const hideChangeEmployeeForm = () => {
  return {
    type: "hide",
  };
};
