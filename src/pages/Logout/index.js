//import "./style.css";

import { logoutAPI } from "../../API";

function Logout() {
  const handleLogout = () => {
    console.log("logout");
    logoutAPI()
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/login";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p>Welcome to Logout page</p>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}

export default Logout;
