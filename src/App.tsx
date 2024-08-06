import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Hidden,
  Stack,
} from "@mui/material";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Home />
      <Box>
        <Divider/>
        <About />
        <Divider />
        <Skills />
        <Divider />
      </Box>
    </>
  );
}
