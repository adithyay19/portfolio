import { Col, Container, Row } from "react-bootstrap";
import profileImage from "./profileImage.jpg";

export default function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Row>
        <span className="heading">About</span>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col md={4} className="text-center">
          <img
            src={profileImage}
            alt="Profile Picture"
            className="rounded-circle float-center"
          />
        </Col>
        <Col md={8} className="justify-content-center align-items-center">
          <p >
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
