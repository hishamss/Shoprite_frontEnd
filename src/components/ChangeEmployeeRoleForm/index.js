import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { hideChangeEmployeeForm } from "../../actions";
import { useRef } from "react";
import { Form } from "react-bootstrap";
import { changeRoleAPI } from "../../API";
import "./style.css";
function ChangeEmployeeRoleForm() {
  const show = useSelector((state) => state.ChangeEmployeeRoleForm);
  const employeeId = useSelector((state) => state.GetEmployeeId);
  const newRole = useRef("");
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideChangeEmployeeForm());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRoleToSubmit = newRole.current.value.trim();
    if (newRoleToSubmit && employeeId) {
      changeRoleAPI(employeeId, newRoleToSubmit)
        .then((response) => {
          if (response.status === 200) {
            //update the employee role after updating his role in DB
            document
              .getElementById(employeeId)
              .getElementsByClassName(
                "employee-role"
              )[0].innerHTML = newRoleToSubmit;
            dispatch(hideChangeEmployeeForm());
          } else alert("something went wrong!!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="text-center" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="newRole">
            <Form.Control
              ref={newRole}
              type="text"
              placeholder="New Role"
              required
            />
          </Form.Group>

          <br />
          <Button id="submitChange-btn" type="submit" variant="outline-danger">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ChangeEmployeeRoleForm;
