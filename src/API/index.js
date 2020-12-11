const axios = require("axios");
axios.defaults.withCredentials = true;
const qs = require("qs");
const devURL = "http://localhost:8080/shoprite";
const prodURL =
  "http://ec2-3-101-140-233.us-west-1.compute.amazonaws.com:8080/shoprite";
export const loginAPI = (username, password) => {
  const data = qs.stringify({
    username,
    password,
  });
  return axios.post(`${prodURL}/login`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "application/json",
    },
  });
};

export const logoutAPI = () => {
  return axios.get(`${prodURL}/logout`);
};

export const employeesAPI = () => {
  return axios.get(`${prodURL}/employees`);
};

export const changeRoleAPI = (id, newRole) => {
  const data = qs.stringify({
    id,
    newRole,
  });
  return axios.post(`${prodURL}/change`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "application/json",
    },
  });
};

export const deleteEmployeeAPI = (id) => {
  return axios.get(`${prodURL}/fire?id=${id}`);
};

export const newEmployeeAPI = (name, role) => {
  const data = qs.stringify({
    names: name,
    jobs: role,
  });
  return axios.post(`${prodURL}/add`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "application/json",
    },
  });
};
