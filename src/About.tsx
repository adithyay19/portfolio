import { Col, Container, Row } from "react-bootstrap";
import profileImage from "./Components/WhatsApp Image 2023-11-26 at 22.34.59_66115f39.jpg";
// E:\Projects\portfolio\src\Components\WhatsApp Image 2023-11-26 at 22.34.59_66115f39.jpg
export default function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Row>
        <h3>About</h3>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <img src={profileImage} alt="Profile Picture" className="img-fluid rounded-circle"/>
        </Col>
        <Col md={8} className="justify-content-center align-items-center">
          <p style={{textAlign: "justify"}}>
            A CODING ENTHUSIAST WHO ENJOYS PROBLEM SOLVING. CURRENTLY FOCUSING
            ON REACT Typescript. I have completed my Bachelor of Technology in
            Computer Science at Toc H Institute of Science & Technology, where I
            am learning the fundamentals and applications of various programming
            languages, frameworks, and tools. I am also involved in various
            extracurricular and co-curricular activities, such as hackathons,
            workshops, and clubs, where I apply and enhance my skills and
            interests. I am motivated by the opportunities and challenges that
            the field of computer science offers, and I aspire to become a
            proficient and creative developer in the future.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
