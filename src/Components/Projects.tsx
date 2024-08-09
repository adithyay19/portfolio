import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { projects } from "./SkillsList";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import projectImage from "../Assets/projectImages/Example.png";
import { motion } from "framer-motion";

function ProjectCard({ project, sectionVariant }: any) {
  return (
    <Grid item md={3} xs={12}>
      <GlowCapture>
        <Glow>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            <motion.div variants={sectionVariant}>
              <Card
                className="project-card"
                sx={{
                  p: "1rem",
                  color: "#28282b",
                  border: "2px solid white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={projectImage}
                  height="150px"
                  sx={{ objectFit: "contain" }}
                />
                <CardContent
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                  <Button variant="outlined" href={project.demo}>
                    Demo
                  </Button>
                  <Button variant="outlined" href={project.github}>
                    Github
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </motion.div>
        </Glow>
      </GlowCapture>
    </Grid>
  );
}

export default function Projects({ sectionVariant }: any) {
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
            <ProjectCard
              key={project.id}
              project={project}
              sectionVariant={sectionVariant}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
