import { Container } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import Skills from "./Skills";

export default function App() {
  return (
    <>
    <Container fluid className="app ">
      <Navigation />
      <Container >
        <Home/>
        <About  />
        <Skills/>
      </Container>
    </Container>
    </>
  );
}
