import "./style.css";
import logo from "../../images/logo-navbar.png";
import { Navbar, Nav } from "react-bootstrap";
function NavBar() {
  return (
    // <div id="navbar-container">
    //   <div id="navbar-logo">
    //     <img src={logo} alt="shoprite-logo" width="100" height="60"></img>
    //   </div>
    //   <div id="navbar-links">
    //     <ul id="navbar-links-list">
    //       <li>Home</li>
    //       <li>New Employee</li>
    //       <li>Change Employee's Role</li>
    //       <li>Delete Employee</li>
    //     </ul>
    //   </div>
    // </div>
    <Navbar id="navbar-container" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="shoprite-logo" width="100" height="60"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="navbar-links">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">New Employee</Nav.Link>
          <Nav.Link href="#link">Change Employee's Role</Nav.Link>
          <Nav.Link href="#link">Delete Employee</Nav.Link>
          <Nav.Link href="#link">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
