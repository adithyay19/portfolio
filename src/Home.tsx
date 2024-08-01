import { Col, Container, Row } from "react-bootstrap";
import htmlGif from "./Components/Html.gif";

export default function Home() {
  return (
    <Container fluid className="home" id="home">
      <Row className="d-flex align-items-center h-100">
        <Col xs={12} sm={6} className="text-center">
          <img src={htmlGif} style={{ width: "75px" }} />
        </Col>
        <Col xs={12} sm={6}>
          <h1 className="Typewriter text-center">Hi, I am Adithya Prasanth!</h1>{" "}
        </Col>
      </Row>
    </Container>
  );
}
