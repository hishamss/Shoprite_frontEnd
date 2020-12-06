import "./style.css";
import { employeesAPI } from "../../API";
import React, { useState, useEffect } from "react";
function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
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
