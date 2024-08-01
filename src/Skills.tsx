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
        <Container fluid className="main-container align-items-center justify-content-center" id="skills">
            <h2>Skills</h2>
            <Carousel>
                {skills.map((skill) => <Carousel.Item interval={2000}>
                        <img src={skill.image} style={{width: "100px"}}/>
                </Carousel.Item>)}
                
            </Carousel>
        </Container>
    );
}