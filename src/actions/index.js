export const getUser = (username) => {
  return {
    type: "currentUser",
    payload: username,
  };
};
export const showChangeEmployeeForm = () => {
  return {
    type: "show-form",
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
    type: "hide-form",
  };
};

export const showDeleteEmployeeConfirmation = () => {
  return {
    type: "show-conf",
  };
};

export const hideDeleteEmployeeConfirmation = () => {
  return {
    type: "hide-conf",
  };
};
