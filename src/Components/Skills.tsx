import { Card, Container } from "react-bootstrap";
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
    }
]

function SkillCard() {
    return(
        <Container fluid className="skill-card">
            <h5>Skill image</h5>
            <h3>Skill</h3>
        </Container>
    );
}

export default function Skills() {
    return(
        <Container fluid className="skills-section" id="skills">
            <span className="heading">Skills</span>
            <Marquee className="marquee1" autoFill pauseOnHover>
                {[1,2,3,4,].map(() => <SkillCard/>)}
            </Marquee>
        </Container>
    );
}