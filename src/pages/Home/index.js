import "./style.css";
import { employeesAPI } from "../../API";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
function Home() {
  const [employees, setEmployees] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    getEmployees();
    setCurrentUser(Cookies.get("username"));
  }, []);
  const getEmployees = () => {
    employeesAPI()
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>Hello {currentUser}</h1>
      <div>
        {employees.map((employee, index) => {
          return (
            <h1 key={index}>
              name: {employee.names}, job: {employee.jobs}
            </h1>
          );
        })}
      </div>
    </>
  );
}

export default Home;
