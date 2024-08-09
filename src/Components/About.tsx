import { Avatar, Grid } from "@mui/material";
import avatarImage from "../Assets/profileImage.jpg";
import { motion } from "framer-motion";

export default function About({ sectionVariant }: any) {
  return (
    <motion.div
      className="about-section"
      id="about"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <motion.div variants={sectionVariant}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xl={12}>
            <h2 className="heading">About Me</h2>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column-reverse" },
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Grid
              item
              sm={12}
              md={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pl: { md: "6rem", xs: "1rem" },
                pr: { md: "0rem", xs: "1rem" },
                
              }}
            >
              <p>
                A coding enthusiast who enjoys problem solving. I am a flexible
                developer who can switch/learn new domains with ease. Currently
                focusing on react TS. I have completed my Bachelor of Technology
                in Computer Science at Toc H Institute of Science & Technology,
                where I am learning the fundamentals and applications of various
                programming languages, frameworks, and tools. I was also involved
                in various extracurricular and co-curricular activities, such as
                hackathons, workshops, and clubs, where I applied and enhanced my
                skills and interests. I am motivated by the opportunities and
                challenges that the field of computer science offers, and I
                aspire to become a proficient and creative developer in the
                future.
              </p>
            </Grid>
            <Grid
              item
              sm={12}
              md={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: { md: "2rem" },
              }}
            >
              <Avatar src={avatarImage} sx={{ width: "50%", height: "auto" }} />
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    </motion.div>
  );
}
