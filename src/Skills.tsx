import { Container } from "react-bootstrap";
import htmlGif from "./Components/bg-img.jpeg";
import cssGif from "./Components/bg-img.jpeg";
import Marquee from "react-fast-marquee";

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

function SkillCard() {
    return(
        <div>
            
        </div>
    );
}

export default function Skills() {
    return(
        <Container fluid className="skills-section" id="skills">
            <span className="heading">Skills</span>
            <Marquee>
                {skills.map((skill) => <img src={skill.image}/>)}
            </Marquee>
        </Container>
    );
}