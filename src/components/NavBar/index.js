import "./style.css";
import logo from "../../images/logo-navbar.png";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { logoutAPI } from "../../API";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
function NavBar() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    setCurrentUser(Cookies.get("username"));
  }, []);
  const handleLogout = () => {
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
    <Navbar id="navbar-container" expand="lg">
      <Navbar.Brand as={NavLink} to="/home">
        <img src={logo} alt="shoprite-logo" width="100" height="60"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="navbar-links">
          <Nav.Link as={NavLink} to="/home" key="1">
            Home
          </Nav.Link>
          {currentUser === "admin" ? (
            <Nav.Link as={NavLink} to="/new" key="2">
              New Employee
            </Nav.Link>
          ) : null}
          <Nav.Link href="#" key="3" onClick={handleLogout}>
            Logout ({currentUser})
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
