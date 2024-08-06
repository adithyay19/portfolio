// import { Card, Container } from "react-bootstrap";
import { Grid, Paper } from "@mui/material";
// import htmlGif from "src/Assets/bg-img.jpeg";
// import cssGif from "src/Assets/bg-img.jpeg";
import Marquee from "react-fast-marquee";
import { skills } from "./SkillsList";
import { Glow, GlowCapture } from "@codaworks/react-glow";
// src\Assets\bg-img.jpeg

function SkillCard({ name, image }: any) {
  return (
    <GlowCapture>
      <Glow color="hsl(338.69 100% 48.04%)">
        <Paper
          className="skill-card"
          elevation={6}
          sx={{
            width: "10rem",
            height: "10rem",
            padding: "1rem",
            textAlign: "center",
            marginInline: "1.5rem",
          }}
        >
          <img src={image} alt={`${name}-image`} />
          <h3>{name}</h3>
        </Paper>
      </Glow>
    </GlowCapture>
  );
}

export default function Skills() {
  return (
    <div className="skills-section" id="skills">
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
          px: { md: "6rem", xs: "2rem" },
        }}
      >
        <Grid item xl={12}>
          <h2 className="heading">Skills</h2>
        </Grid>
        <Grid item md={12}>
          <Marquee className="marquee" autoFill pauseOnHover loop={0}>
            {skills.map((skill) => (
              <SkillCard key={skill.id} name={skill.name} image={skill.image} />
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </div>
  );
}
