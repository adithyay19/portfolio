import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar expand="md" className="nav-bar" sticky="top">
      <Container>
        <Navbar.Brand href="#">Adithya Prasanth</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav className="">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
