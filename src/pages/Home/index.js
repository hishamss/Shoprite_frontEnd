import "./style.css";
import { employeesAPI } from "../../API";
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
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
    <div class="container" id="employees-container">
      {employees.map((employee, index) => {
        return (
          <Card key={index} className="employee-cards">
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>
                <h2>{employee.names}</h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {employee.jobs}
              </Card.Subtitle>
              <br />

              <Button className="employee-Btns" variant="outline-danger">
                Change Role
              </Button>
              <br />
              <br />
              <Button className="employee-Btns" variant="outline-danger">
                Delete Employee
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Home;
