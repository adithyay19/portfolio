import {
  Box,
  CssBaseline,
} from "@mui/material";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import { useScroll, motion } from "framer-motion";

export default function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <CssBaseline />
      <Navigation />
      <motion.div className="progress-bar" style={{scaleX: scrollYProgress}}/>
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