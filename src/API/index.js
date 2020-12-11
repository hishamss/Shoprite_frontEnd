const axios = require("axios");
axios.defaults.withCredentials = true;
const qs = require("qs");
export const loginAPI = (username, password) => {
  const data = qs.stringify({
    username,
    password,
  });
  return axios.post("http://localhost:8080/backEndServer/login", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "application/json",
    },
  });
};

export const logoutAPI = () => {
  return axios.get("http://localhost:8080/backEndServer/logout");
};

export const employeesAPI = () => {
  return axios.get("http://localhost:8080/backEndServer/employees");
};

export const changeRoleAPI = (id, newRole) => {
  const data = qs.stringify({
    id,
    newRole,
  });
  return axios.post("http://localhost:8080/backEndServer/change", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "application/json",
    },
  });
};

export const deleteEmployeeAPI = (id) => {
  return axios.get(`http://localhost:8080/backEndServer/fire?id=${id}`);
};

export const newEmployeeAPI = (name, role) => {
  const data = qs.stringify({
    names: name,
    jobs: role,
  });
  return axios.post("http://localhost:8080/backEndServer/add", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "application/json",
    },
  });
};
