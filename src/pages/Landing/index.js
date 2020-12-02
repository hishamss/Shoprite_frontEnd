import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";
function Landing() {
  return (
    <div id="landing-container">
      <Card id="login-card">
        <Card.Body>
          <h3>Welcome to Shoprite</h3>
          <Form id="login-form">
            <Form.Group controlId="login-username">
              <Form.Control type="text" placeholder="Enter Username" required />
            </Form.Group>
            <Form.Group controlId="login-password">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                required
              />
            </Form.Group>
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
