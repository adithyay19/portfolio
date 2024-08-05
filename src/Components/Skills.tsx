// import { Card, Container } from "react-bootstrap";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
// import htmlGif from "src/Assets/bg-img.jpeg";
// import cssGif from "src/Assets/bg-img.jpeg";
import avatarImage from "../Assets/profileImage.jpg";
import Marquee from "react-fast-marquee";
import { skills } from "./SkillsList";
// src\Assets\bg-img.jpeg

function SkillCard({ name, image }: any) {
  return (
    <Paper
    className="skill-card"
        elevation={12}
      sx={{
        width: "15rem",
        height: "15rem",
        border: "1px solid red",
        padding: "1rem",
        textAlign: "center",
        marginInline: "1.5rem",
        
      }}
      
    >
      <img src={image} alt={`${name}-image`} />
      <h2>{name}</h2>
    </Paper>
  );
}

export default function Skills() {
  return (
    <div className="skills-section">
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem"
        }}
      >
        <Grid item xl={12}>
          <h2 className="heading">Skills</h2>
        </Grid>
        <Grid item md={12}>
          <Marquee className="marquee" autoFill pauseOnHover loop={0}>
            {skills.map((skill) => (
              <SkillCard name={skill.name} image={skill.image} />
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </div>
  );
}
