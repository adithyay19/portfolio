import { Card, Carousel, Container } from "react-bootstrap";
import htmlGif from "./Components/Html.gif";
import cssGif from "./Components/Css.gif";

const skills = [
    {
        name: "HTML",
        image: htmlGif,
    },
    {
        name: "CSS",
        image: cssGif,
    },
]

export default function Skills() {
    return(
        <Container fluid id="skills">
            <h2>Skills</h2>
            <Carousel>
                {skills.map((skill) => <Carousel.Item interval={2000}>
                        <img src={skill.image} />
                </Carousel.Item>)}
                
            </Carousel>
        </Container>
    );
}