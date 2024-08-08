import { Grid, Paper } from "@mui/material";
// import Marquee from "react-fast-marquee";
import { skills } from "./SkillsList";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Virtual } from "swiper/modules";
// import { useState, useEffect } from "react";

function SkillCard({ name, image }: any) {
  return (
    <GlowCapture>
      <Glow color="hsl(338.69 100% 48.04%)">
        <Paper
          className="skill-card"
          elevation={6}
          sx={{
            width: "10rem",
            height: "10rem",
            padding: "1rem",
            textAlign: "center",
            marginInline: "1.5rem",
          }}
        >
          <img src={image} alt={`${name}-image`} />
          <h3>{name}</h3>
        </Paper>
      </Glow>
    </GlowCapture>
  );
}

export default function Skills() {

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="skills-section" id="skills">
      <Grid
        container
        rowGap={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { md: "16rem", xs: "0rem" },
        }}
      >
        <Grid item xl={12}>
          <h2 className="heading">Skills</h2>
        </Grid>
        <Grid item md={12}>
          <Swiper
          className="marquee"
            spaceBetween={2}
            slidesPerView={1}
            virtual
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Virtual]}
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill.id} virtualIndex={skill.id}>
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  image={skill.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
}
