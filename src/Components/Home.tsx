import { Grid } from "@mui/material";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="home-section" id="home">
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          item
          sm={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2Fillustration.svg?v=1618177344016"
            alt="home-icon"
            style={{ width: "50%", height: "auto" }}
          />
        </Grid>
        <Grid
          className="home-text"
          item
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sm={12}
          md={8}
        >
          <h3>Hello, I'm </h3>

          <ReactTyped
            strings={[
              "Adithya Prasanth",
              "TypeScript Developer",
              "Software Engineer Trainee",
              "CI/CD Engineer"
            ]}
            typeSpeed={75}
            backSpeed={60}
            backDelay={2000}
            loop
          />
        </Grid>
      </Grid>
    </div>
  );
}
