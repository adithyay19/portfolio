import { Container } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

export default function App() {
  return (
    <>
    <Container fluid className="app">
      <Navigation />
      <Container fluid>
        <Home/>
        <About  />
        <Skills/>
        <Projects />
        <Footer />
      </Container>
    </Container>
    </>
  );
}
