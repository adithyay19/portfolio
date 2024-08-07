import { Button, Divider, Grid, IconButton, Snackbar, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadIcon from '@mui/icons-material/Download';

export default function Footer() {

  return (
    <footer className="footer-section">
      <Grid
        container
        spacing={2}
        // xs={12}
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column-reverse" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item>
          <Typography>Designed by Adithya Prasanth</Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" endIcon={<DownloadIcon/>} target="_blank" href="https://drive.google.com/file/d/10HuCd-HF-eke23QQCGTAsRDOjb1hYbcQ/view?usp=sharing">Resume</Button>
          <Snackbar/>
        </Grid>
        <Grid item>
          <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem/>}
          spacing={2}
          >
            <IconButton href="https://github.com/adithyay19" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/adithya-prasanth/" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/__.adithyay.__/" target="_blank">
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </footer>
  );
}
