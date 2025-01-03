import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { sections } from "./Lists";

interface Props {
  window?: () => Window;
}

export default function Navigation(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSectionClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: "100%",
        textAlign: "center",
        background: "#f5f5f5",
        color: "#28282b",
        fontFamily: "IBM Plex Sans",
        textTransform: "uppercase"
      }}
    >
      <Typography variant="h5" sx={{ my: 2 }}>
        PORTFOLIO
      </Typography>
      <Divider />
      <List>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", color: "#28282b" }}
              onClick={() => handleSectionClick(section.url)}
            >
              <ListItemText primary={section.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar component="nav" sx={{ display: "flex", background: "#f5f5f5" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "normal", sm: "space-between" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#373b61" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            color="#373b61"
            sx={{
              mr: 2,
              display: "flex",
              justifyContent: { xs: "center" },
              fontSize: "1.2rem",
              fontWeight: 500,
              letterSpacing: ".2rem",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Adithya Prasanth
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {sections.map((section) => (
              <Button
                className="nav-buttons"
                key={section.id}
                onClick={() => handleSectionClick(section.url)}
                sx={{
                  color: "#373b61",
                  fontSize: "1rem",
                  px: 3,
                  "&:hover": {
                    color: "#f5f5f5",
                    backgroundColor: "#373b61",
                  },
                }}
              >
                {section.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            // background: "green",
            color: "#28282b",
            fontFamily: "IBM Plex Sans",
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
