import { Col, Container, Row } from "react-bootstrap";
import htmlGif from "./Components/Html.gif";
import { ReactTyped } from "react-typed";


export default function Home() {
  return (
    <Container fluid className="home" id="home">
      <Row className="d-flex align-items-center justify-content-center h-100">
        <Col xs={12} sm={6} className="text-center">
        <span>

          <img src={htmlGif} style={{ width: "75px" }} />
        </span>
        </Col>
        <Col xs={12} sm={6}>
        <span>

          <h1 className="Typewriter text-center">Hello 👋🏻</h1>
          <h2>I'm Adithya Prasanth</h2>
          
          <ReactTyped strings={[ ]} typeSpeed={40} backSpeed={50} backDelay={2000} loop>
            <h1 />
          </ReactTyped>
        </span>
        </Col>
      </Row>
    </Container>
  );
}
