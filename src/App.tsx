import {
  Box,
  CssBaseline,
} from "@mui/material";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Home />
      <Box>
        <About />
        <Skills />
        <Projects />
        <Footer />
      </Box> 
    </>
  );
}