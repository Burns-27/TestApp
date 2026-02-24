import "bootstrap/dist/css/bootstrap.min.css";
import TestForm from "./forms/TestForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <Row>
        <Col md>
          <TestForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
