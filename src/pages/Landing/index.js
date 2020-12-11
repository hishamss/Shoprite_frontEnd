import "./style.css";
import { loginAPI } from "../../API";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";
function Landing() {
  const username = useRef("");
  const password = useRef("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const usernameToSubmit = username.current.value.trim();
    const passwordToSubmit = password.current.value.trim();

    setMessage("");
    if (usernameToSubmit && passwordToSubmit) {
      loginAPI(usernameToSubmit, passwordToSubmit)
        .then((response) => {
          if (response.status === 200) {
            window.location.href = "/home";
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setMessage("incorrect username/password");
          } else {
            setMessage("smth went wrong; try again");
          }
        });
    } else {
      console.log("username & password are required!!");
      setMessage("username & password are required!!");
    }
  };
  return (
    <div id="landing-container">
      <Card id="login-card">
        <Card.Body>
          <h3>Welcome to Shoprite</h3>
          <Form id="login-form" onSubmit={(event) => handleSubmit(event)}>
            <Form.Group controlId="login-username">
              <Form.Control
                ref={username}
                type="text"
                placeholder="Enter Username"
                required
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="login-password">
              <Form.Control
                ref={password}
                type="password"
                placeholder="Enter Password"
                required
                autoComplete="off"
              />
            </Form.Group>
            <p id="login-message">{message}</p>
            <br />
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Landing;
