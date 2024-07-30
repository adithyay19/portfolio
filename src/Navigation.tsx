import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
    return(
        <Navbar className="bg-body-tertiary" sticky="top">
            <Container>
                <NavbarBrand>Portfolio</NavbarBrand>
                <Nav className="justify-content-end">
                    <Nav.Link href="https://adithyay19.github.io/toDoApp/">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link>Skills</Nav.Link>
                    <Nav.Link>Project</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}