import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { hideDeleteEmployeeConfirmation } from "../../actions";
import { deleteEmployeeAPI } from "../../API";
import "./style.css";

function DeleteEmployee() {
  const show = useSelector((state) => state.DeleteEmployeeConfirmation);
  const employeeId = useSelector((state) => state.GetEmployeeId);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideDeleteEmployeeConfirmation());
  };

  const confirmDelete = () => {
    deleteEmployeeAPI(employeeId).then((response) => {
      if (response.status === 200) {
        document.getElementById(employeeId).style.display = "none";
        handleClose();
      } else alert("something went wrong!!");
    });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <h3>Are you sure you want to delete this Employee?</h3>
        <br />
        <Button
          id="confirmDelete-btn"
          variant="outline-danger"
          onClick={() => confirmDelete()}
        >
          Confirm
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteEmployee;
