import "./style.css";
import logo from "../../images/logo-navbar.png";
import { Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { newEmployeeAPI } from "../../API";
function NewEmployee() {
  const employeeName = useRef("");
  const employeeRole = useRef("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    const employeeNameToSubmit = employeeName.current.value.trim();
    const employeeRoleToSubmit = employeeRole.current.value.trim();
    if (employeeRoleToSubmit && employeeNameToSubmit) {
      newEmployeeAPI(employeeNameToSubmit, employeeRoleToSubmit)
        .then((response) => {
          if (response.status === 200) {
            setMessage("Added Successfully");
          }
        })
        .catch((err) => {
          setMessage(err);
        });
    }
  };
  return (
    <div className="container" id="newEmployee-container">
      <div id="newEmployeeForm-container">
        <div id="form-header" className="text-center">
          <img src={logo} alt="logo" width="100" height="80"></img>
          <h4>Add new Employee</h4>
        </div>
        <div id="form-body">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                ref={employeeName}
                type="text"
                required
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group controlId="formBasicJob">
              <Form.Label>Employee Role</Form.Label>
              <Form.Control
                ref={employeeRole}
                type="text"
                required
                autoComplete="off"
              />
            </Form.Group>
            <p style={{ color: "red", height: "15px" }}>{message}</p>
            <Button variant="outline-danger" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default NewEmployee;
