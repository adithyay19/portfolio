import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { projects } from "./SkillsList";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import projectImage from "../Assets/projectImages/Example.png"

function ProjectCard({project}: any) {
  return (
    <Grid item md={3} xs={12}>
      <GlowCapture>
        <Glow>
          <Card className="project-card" sx={{p: "1rem", color: "#28282b",border: "2px solid white", display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
            <CardMedia component="img" image={projectImage} height="150px" sx={{objectFit: "contain"}}/>
            <CardContent sx={{alignItems: "center", justifyContent: "center", alignContent: "center"}}>
              <Typography variant="h6" sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>{project.title}</Typography>
              <Typography variant="body1" sx={{display: "flex", alignItems: "center", justifyContent: "center", textAlign: "justify"}}>{project.detail}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" href={project.demo}>Demo</Button>
              <Button variant="outlined" href={project.github}>Github</Button>
            </CardActions>
          </Card>
        </Glow>
      </GlowCapture>
    </Grid>
  );
}

export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      <Grid container xs={12} sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Grid item>
          <h2 className="heading">Projects</h2>
        </Grid>
        <Grid container gap={6} sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
