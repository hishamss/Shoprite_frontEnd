export const getUser = (username) => {
  return {
    type: "currentUser",
    payload: username,
  };
};
