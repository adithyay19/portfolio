import { Button, Card, Col, Container, Row } from "react-bootstrap";

const projects = [
  {
    id: 1,
    title: "To-Do App",
    text: "This is a to do app",
    link: "link-of-website",
    image: "image",
  },
  {
    id: 2,
    title: "To-Do App",
    text: "This is a to do app",
    link: "link-of-website",
    image: "image",
  },
  {
    id: 3,
    title: "To-Do App",
    text: "This is a to do app",
    link: "link-of-website",
    image: "image",
  },
  {
    id: 4,
    title: "To-Do App",
    text: "This is a to do app",
    link: "link-of-website",
    image: "image",
  },
];

export default function Projects() {
  return (
    <Container fluid>
      <Row>
        {projects.map((project) => (
          <Col key={project.id}>
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
                <Row>
                  <Col>
                    <Button href="#">Github</Button>
                  </Col>
                  <Col>
                    <Button href="#">Demo</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
