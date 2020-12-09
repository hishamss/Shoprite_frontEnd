import "./style.css";
import logo from "../../images/logo-navbar.png";
import loading from "../../images/loading.gif";
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
    document.getElementById("newEmployee-loadingGIF").style.display =
      "inline-block";
    const employeeNameToSubmit = employeeName.current.value.trim();
    const employeeRoleToSubmit = employeeRole.current.value.trim();
    if (employeeRoleToSubmit && employeeNameToSubmit) {
      newEmployeeAPI(employeeNameToSubmit, employeeRoleToSubmit)
        .then((response) => {
          if (response.status === 200) {
            //just to simulate 1 second delay in the API response
            setTimeout(() => {
              setMessage("Added Successfully");
              document.getElementById("newEmployee-loadingGIF").style.display =
                "none";
              employeeName.current.value = "";
              employeeRole.current.value = "";
            }, 1000);
          }
        })
        .catch((err) => {
          setMessage(err);
          document.getElementById("newEmployee-loadingGIF").style.display =
            "none";
          employeeName.current.value = "";
          employeeRole.current.value = "";
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
            <div style={{ marginBottom: "20px", height: "20px" }}>
              <img id="newEmployee-loadingGIF" src={loading} alt="loadingGIF" />
              <p style={{ color: "red", height: "11px", lineHeight: "11px" }}>
                {message}
              </p>
            </div>

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
