import { Avatar, Container, Grid } from "@mui/material";
import avatarImage from "../Assets/profileImage.jpg";

export default function About() {
  return (
    <div className="about-section">
      <Grid container sx={{justifyContent: "center", alignItems: "center"}}>
        <Grid item xl={12}>
          <h2 className="heading">About Me</h2>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: {md: "row", xs:"column-reverse"},
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Grid
            item
            sm={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pl: { md: "6rem", xs: "1rem" },
              pr: { md: "6rem", xs: "1rem" },
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vitae dolor mi. Vivamus vehicula interdum sollicitudin. Aliquam
              nec orci ligula. Maecenas eget pretium metus, non finibus nisi.
              Pellentesque pellentesque consequat cursus. Aenean sagittis
              fringilla magna, id facilisis nisi ultrices eu. Vivamus nec ipsum
              ac velit facilisis efficitur. Mauris odio arcu, sollicitudin ut
              semper quis, suscipit convallis nisl. Nullam laoreet eget orci in
              laoreet. Phasellus ornare, tortor at molestie rhoncus, leo dolor
              vestibulum enim, eget vehicula lacus urna at ante. Aenean
              tristique sapien vel dolor malesuada dignissim. Sed in felis
              fermentum, viverra lacus quis, ultrices nulla. Sed vehicula eget
              nulla non tempus. Maecenas tristique non sem eget laoreet. Duis ut
              tortor libero. Curabitur a nibh sed risus pulvinar feugiat et ut
              elit.
            </p>
          </Grid>
          <Grid
            item
            sm={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: {md: "2rem"},
            }}
          >
            <Avatar src={avatarImage} sx={{ width: "50%", height: "auto" }} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
