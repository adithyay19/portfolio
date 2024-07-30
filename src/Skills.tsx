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
        <Container>
            <Carousel>
                {skills.map((skill) => <Carousel.Item interval={1000}>
                    <Card>
                        <img src={skill.image} />
                        <Card.Body>

                        {/* <Card.Title>{skill.name}</Card.Title> */}
                        </Card.Body>
                    </Card>
                    <Carousel.Caption>{skill.name}</Carousel.Caption>
                </Carousel.Item>)}
                
            </Carousel>
        </Container>
    );
}