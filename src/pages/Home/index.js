import "./style.css";
import { employeesAPI, changeRoleAPI } from "../../API";
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import {
  showChangeEmployeeForm,
  getEmployeeId,
  hideChangeEmployeeForm,
} from "../../actions";
import { useDispatch } from "react-redux";
import ChangeEmployeeRoleForm from "../../components/ChangeEmployeeRoleForm";
function Home() {
  const [employees, setEmployees] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getEmployees();
  }, []);

  const changeRoleHandler = (id) => {
    console.log(`change role for ${id}`);
    dispatch(showChangeEmployeeForm());
    dispatch(getEmployeeId(id));
  };
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
    <div className="container" id="employees-container">
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

              <Button
                className="employee-Btns"
                variant="outline-danger"
                onClick={() => changeRoleHandler(employee.id)}
              >
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
      <ChangeEmployeeRoleForm />
    </div>
  );
}

export default Home;
