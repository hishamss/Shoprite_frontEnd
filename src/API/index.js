export const loginAPI = (username, password) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "application/json",
    },
    body: `username=${username}&password=${password}`,
  };
  return fetch("/login", request);
};
