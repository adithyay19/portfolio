import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Grid
        container
        md={12}
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item>
          <Typography>Designed by Adithya Prasanth</Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined">Resume</Button>
        </Grid>
        <Grid item>
          <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem/>}
          spacing={2}
          >
            <Button>
              <GitHubIcon />
            </Button>
            <Button>
              <LinkedInIcon />
            </Button>
            <Button>
              <InstagramIcon />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </footer>
  );
}
