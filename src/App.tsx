import {
  Box,
  CssBaseline,
  Divider,
} from "@mui/material";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

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
        <Projects />
        <Divider />
        <Footer />
      </Box>
      <ScrollToTop/>
    </>
  );
}