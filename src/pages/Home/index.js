import "./style.css";
import { employeesAPI } from "../../API";
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import {
  showChangeEmployeeForm,
  getEmployeeId,
  showDeleteEmployeeConfirmation,
} from "../../actions";
import { useDispatch } from "react-redux";
import ChangeEmployeeRoleForm from "../../components/ChangeEmployeeRoleForm";
import DeleteEmployee from "../../components/DeleteEmployee";
function Home() {
  const [employees, setEmployees] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getEmployees();
  }, []);

  const changeRoleHandler = (id) => {
    dispatch(showChangeEmployeeForm());
    dispatch(getEmployeeId(id));
  };

  const deleteEmployeeHandler = (id) => {
    dispatch(showDeleteEmployeeConfirmation());
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
      {employees.map((employee) => {
        return (
          <Card key={employee.id} id={employee.id} className="employee-cards">
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>
                <h2>{employee.names}</h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted employee-role">
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
              <Button
                className="employee-Btns"
                variant="outline-danger"
                onClick={() => deleteEmployeeHandler(employee.id)}
              >
                Delete Employee
              </Button>
            </Card.Body>
          </Card>
        );
      })}
      <ChangeEmployeeRoleForm />
      <DeleteEmployee />
    </div>
  );
}

export default Home;
