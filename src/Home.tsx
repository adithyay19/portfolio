import { Col, Container, Row } from "react-bootstrap";
import htmlGif from "./Components/Html.gif";
import { ReactTyped } from "react-typed";


export default function Home() {
  return (
    <Container fluid className="home" id="home">
      <Row className="d-flex align-items-center justify-content-center h-100">
        <Col xs={12} sm={4} className="text-center">
        <span>

          <img src={htmlGif} style={{ width: "75px" }} />
        </span>
        </Col>
        <Col xs={12} sm={8} className="text-center">
<span>
  <h1>Hello 👋🏻</h1>
  <br />

        <ReactTyped className="typed-text" strings={["I'm adithya prasanth", "react developer"]} typeSpeed={40} backSpeed={50} backDelay={2000} loop/>
</span>
        </Col>
      </Row>
    </Container>
  );
}
