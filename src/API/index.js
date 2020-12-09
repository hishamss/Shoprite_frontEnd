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

export const logoutAPI = () => {
  return fetch("/logout");
};

export const employeesAPI = () => {
  return fetch("/employees");
};

export const changeRoleAPI = (id, newRole) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "application/json",
    },
    body: `id=${id}&newRole=${newRole}`,
  };
  return fetch("/change", request);
};

export const deleteEmployeeAPI = (id) => {
  return fetch(`/fire?id=${id}`);
};

export const newEmployeeAPI = (name, role) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "application/json",
    },
    body: `names=${name}&jobs=${role}`,
  };
  return fetch("/add", request);
};
