import { motion } from "framer-motion";
import Slider from "react-slick";
import { skills } from "./SkillsList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Grid, Paper } from "@mui/material";

function SkillCard({ name, image }: any) {
  return (
    <Paper
    elevation={0}
      sx={{
        
        background: "none",
        border: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        fontFamily: "Montserrat",
        color: "whitesmoke",
        fontSize: {md: "1.5rem", xs: "1rem"},
      }}
    >
      <img src={image} alt={`${name}-image`} />
      <h3>{name}</h3>
    </Paper>
  );
}

export default function Skills({ sectionVariant }: any) {

  return (
    <motion.div
      className="skills-section"
      id="skills"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <motion.div variants={sectionVariant}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item>
            <h2 className="heading">Skills</h2>
          </Grid>
          <Grid
            item
            sx={{
              px: { md: "10rem", xs: "1rem" },
              overflowX: "hidden",
            }}
          >
            <Swiper
              effect="coverflow"
              centeredSlides={true}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 10,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[Autoplay, EffectCoverflow]}
            >
              {skills.map((skill) => (
                <SwiperSlide>
                  <SkillCard name={skill.name} image={skill.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
        {/* <Grid container>

        </Grid> */}
      </motion.div>
    </motion.div>
  );
}
