import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar expand="md" className="nav-bar1" sticky="top">
      <Container>
        <Navbar.Brand href="#">Adithya Prasanth</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Item className="nav-btn">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-btn">
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-btn">
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-btn">
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-btn">
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
