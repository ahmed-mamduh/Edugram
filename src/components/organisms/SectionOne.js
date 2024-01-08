import React from "react";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import "../../index.css";
import sectionOneImage from "../../assets/sectionOneImage.png";

function SectionOne() {
  const theme = useTheme();

  return (
    <Grid
      className='first_section'
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      flexWrap={"wrap"}
    >
      {/* Left side with main header and text */}
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        item
        md={6}
        style={{
          marginTop: "50px",
        }}
      >
        <Stack style={{ padding: "20px", margin: "auto", width: "90%" }}>
          <Typography
            sx={{
              color: "var(--primary-color )",
              mt: 20,
              width: "100%",
              margin: "auto",
              fontSize: "45px",
            }}
          >
            Take The Next Step
            <span style={{ color: "var(--secondary-color)" }}>
              Toward Your Success
            </span>
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "13px",
              opacity: "75%",
              width: "100%",
              height: "60px",
              whiteSpace: "wrap",
              color: "var(--text-color)",
              lineHeight: "21px",
              marginTop: "20px",
              [theme.breakpoints.down("sm")]: {
                marginBottom: "15px",
              },
            }}
          >
            Join hundreds of learners from the middle-east already learning on
            E-learning Platform! We qualify you to be a highly competent
            programmer through a myriad of software development courses covering
            a variety of programming languages.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={5}>
        <img
          src={sectionOneImage}
          alt='Girl_Image'
          style={{
            width: "99%",
            marginTop: "15px",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default SectionOne;
