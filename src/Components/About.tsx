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
                pl: { md: "6rem", xs: "1.2rem" },
                pr: { md: "0rem", xs: "1.2rem" },
                textAlign: { md: "justify", xs: "center" },
              }}
            >
              <p>
                A coding enthusiast who enjoys problem solving. I am a flexible
                developer who can switch/learn new domains with ease. I am
                currently employed at Xerox as a software engineer, where I am
                part of a team building and managing .NET Framework & Core with
                Razor pages along with MS SQL. I also have a stand-alone role as CI/CD engineer,
                maintaining and pushing updates into the existing architecture.
                On my free time, I focus on personal projects based Next.js and
                Python bots.
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
