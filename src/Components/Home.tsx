import { Grid } from "@mui/material";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="home-section">
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
          container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sm={12}
          md={8}
          spacing={0}
        >
          <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
            <h2>Hello 👋🏻</h2>
          </Grid>
          <Grid item xs={12}>
            <ReactTyped
              
              strings={["I'm Adithya Prasanth", "React Developer"]}
              typeSpeed={40}
              backSpeed={50}
              backDelay={2000}
              loop
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}