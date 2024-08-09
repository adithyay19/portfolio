import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { projects } from "./Lists";

function ProjectCard({ project }: any) {
  return (
    <Grid item md={3} xs={12}>
      <Card
        className="project-card"
        sx={{
          p: "1rem",
          color: "#28282b",
          background: "#f5f5f5",
          border: "2px solid white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "30rem"
        }}
      >
        <CardMedia
          component="img"
          image={project.image}
          height="150px"
          sx={{ objectFit: "contain" }}
        />
        <CardContent
          sx={{
            display:"flex",
            flexDirection:"column",
            fontFamily: "IBM Plex Sans",

          }}
        >
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "justify",
            }}
          >
            {project.detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            target="_blank"
            href={project.demo}
            sx={{
              color: "#373b61",
              borderColor: "#28282b",
              px: 2,
              "&:hover": {
                color: "whitesmoke",
                backgroundColor: "#373b61",
                border: "none",
              },
            }}
          >
            Demo
          </Button>
          <Button
            variant="outlined"
            target="_blank"
            href={project.github}
            sx={{
              color: "#373b61",
              borderColor: "#28282b",
              px: 2,
              "&:hover": {
                color: "whitesmoke",
                backgroundColor: "#373b61",
                border: "none",
              },
            }}
          >
            Github
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <h2 className="heading">Projects</h2>
        </Grid>
        <Grid
          container
          gap={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
