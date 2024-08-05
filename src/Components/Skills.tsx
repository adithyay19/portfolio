// import { Card, Container } from "react-bootstrap";
import { Container } from "@mui/material";
// import htmlGif from "src/Assets/bg-img.jpeg";
// import cssGif from "src/Assets/bg-img.jpeg";
import Marquee from "react-fast-marquee";
// src\Assets\bg-img.jpeg
const skills = [
    {
        name: "HTML",
        // image: htmlGif,
    },
    {
        name: "CSS",
        // image: cssGif,
    }
]

function SkillCard() {
    return(
        <Container className="skill-card">
            <h5>Skill image</h5>
            <h3>Skill</h3>
        </Container>
    );
}

export default function Skills() {
    return(
        <Container className="skills-section" id="skills">
            <span className="heading">Skills</span>
            <Marquee className="marquee1" autoFill pauseOnHover>
                {[1,2,3,4,].map(() => <SkillCard/>)}
            </Marquee>
        </Container>
    );
}