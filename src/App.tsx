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
import { useScroll, motion, useSpring, Variants } from "framer-motion";
import { useRef } from "react";

export default function App() {

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef});
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const sectionVariant: Variants = {
    offscreen: {
      y: 100
    },
    onscreen: {
      y: 50,
      rotate:0,
      transition: {
        type: "spring",
        bounce: 0.8,
        duration: 1.5
      }
    }
  };

    

  
  

  return (
    <div ref={scrollRef} className="scroll-container">
      <CssBaseline />
      <Navigation />
      <motion.div className="progress-bar" style={{scaleX}}/>
      <Home />
      <Box>
        <About sectionVariant={sectionVariant}/>
        <Skills sectionVariant={sectionVariant}/>
        <Projects sectionVariant={sectionVariant}/>
        <Footer />
      </Box> 
      <div className="scrollbar">
          <motion.div
            className="scrollbar-thumb"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      
    </div>
  );
}