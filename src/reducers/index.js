import currentUserReducer from "./currentUser";
import ChangeEmployeeRoleForm from "./ChangeEmployeeRoleForm";
import GetEmployeeId from "./GetEmployeeId";
import DeleteEmployeeConfirmation from "./DeleteEmployeeConfirmation";
import { combineReducers } from "redux";
//REDUCER (IS THE GUY WHO IS DOING THE JOB-> HE GOES TO THE STORE AND UPDATE THE STATE)
const allReducers = combineReducers({
  currentUserReducer,
  ChangeEmployeeRoleForm,
  GetEmployeeId,
  DeleteEmployeeConfirmation,
});

export default allReducers;
