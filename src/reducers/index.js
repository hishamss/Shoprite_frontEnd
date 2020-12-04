import currentUserReducer from "./currentUser";
import { combineReducers } from "redux";

//REDUCER (IS THE GUY WHO IS DOING THE JOB-> HE GOES TO THE STORE AND UPDATE THE STATE)
const allReducers = combineReducers({
  currentUserReducer,
});

export default allReducers;
