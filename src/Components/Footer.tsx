import {
  Button,
  Divider,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column-reverse" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item>
          <Typography>Designed with Vite + ReactTS + MUI</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            endIcon={<CloudDownloadIcon />}
            target="_blank"
            href="https://drive.google.com/file/d/1y6hvUxx8nJnlQC-m_F0Miv6GfsNGvOmg/view?usp=sharing"
            sx={{
              color: "#373b61",
              px: 2,
              "&:hover": {
                color: "whitesmoke",
                backgroundColor: "#373b61",
              },
            }}
          >
            Resume
          </Button>
          <Snackbar />
        </Grid>
        <Grid item>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <IconButton
              href="https://github.com/adithyay19"
              target="_blank"
              sx={{
                color: "#373b61",
                "&:hover": {
                  color: "whitesmoke",
                  backgroundColor: "#373b61",
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/adithya-prasanth/"
              target="_blank"
              sx={{
                color: "#373b61",
                "&:hover": {
                  color: "whitesmoke",
                  backgroundColor: "#373b61",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/__.adithyay.__/"
              target="_blank"
              sx={{
                color: "#373b61",               
                "&:hover": {
                  color: "whitesmoke",
                  backgroundColor: "#373b61",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </footer>
  );
}
