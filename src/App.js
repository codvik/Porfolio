import logo from "./logo.svg";
import "./App.css";

import {
  Container,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Alert variant="primary">Hello Jitender this is my First Task</Alert>
        <Alert variant="secondary">Hello Jitender this is my First Task</Alert>
        <Alert variant="success">Hello Jitender this is my First Task</Alert>
        <Alert variant="danger">Hello Jitender this is my First Task</Alert>
        <Alert variant="warning">Hello Jitender this is my First Task</Alert>
        <Alert variant="info">Hello Jitender this is my First Task</Alert>
        <Alert variant="light">Hello Jitender this is my First Task</Alert> */}
        <Container style={{ width: "700px" }}>
          <Form className="mp-3">
            <Row>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email Adress"
                  ></Form.Control>
                  <Form.Text text="muted">
                    Please Login with a new account
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPassword">
                  <Form.Label> Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" variant="secondary">
              Login
            </Button>
          </Form>

          <Container variant="secondary" style={{ width: "290px" }}>
            <Card
              className="mb-2"
              style={{ color: "black", width: "280.25px" }}
            >
              <Card.Img
                src="/Images/marshmallow.jpg"
                alt="Marshmallow"
                style={{ height: "500px", width: "277px" }}
              ></Card.Img>
              <Card.Body>
                <Card.Title>My Card</Card.Title>
                <Card.Text>
                  This is an example of react bootsrap cards
                </Card.Text>
                <Button>Read More</Button>
              </Card.Body>
            </Card>
            <Breadcrumb>
              <Breadcrumb.Item>Test1</Breadcrumb.Item>
              <Breadcrumb.Item>Test2</Breadcrumb.Item>
              <Breadcrumb.Item active>Test3</Breadcrumb.Item>
            </Breadcrumb>
          </Container>

          <Alert variant="dark">
            Hello Jitender this is my First Task jitender
          </Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
