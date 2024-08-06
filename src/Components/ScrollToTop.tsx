import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button"; // Or any other button library
import { Fab } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fab onClick={handleClick} sx={{
        display: showButton? 'block':'none',
        position: "fixed",
        bottom: 15,
        right: 15
    }}>
        <NavigationIcon />
    </Fab>
  );
}
