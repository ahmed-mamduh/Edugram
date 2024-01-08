import React from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import logo from "../../assets/Logo.svg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const TopFooter = () => {
  return (
    <>
      <Grid
        style={{
          width: "90%",
          marginTop: "50px",
          marginBottom: "50px",
          margin: "auto",
        }}
        container
        spacing={4}
      >
        {/* First Column */}
        <Grid item xs={12} sm={3}>
          <Box>
            {/* Logo and Typography */}
            <img src={logo} alt='Logo' style={{ width: "80%" }} />
            <Typography
              variant='body2'
              style={{
                color: "#343434",
                fontSize: "13px",
                lineHeight: "25px",
                letterSpacing: ".4px",
                marginTop: "10px",
              }}
            >
              Discover the fastest, most effective way to build your skills with
              courses,certificates, and degrees.Get started with us.
            </Typography>

            {/* Social Media Icons */}
            <Stack
              direction='row'
              spacing={1}
              className='icons'
              style={{
                marginLeft: "-10px",
                marginTop: "10px",
                marginBottom: "25px",
              }}
            >
              <IconButton style={{ color: "var(--primary-color)" }}>
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton style={{ color: "var(--primary-color)" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton style={{ color: "var(--primary-color)" }}>
                <YouTubeIcon />
              </IconButton>
              <IconButton style={{ color: "var(--primary-color)" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton style={{ color: "var(--primary-color)" }}>
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={3}>
          <Box>
            <Typography
              variant='h6'
              style={{ color: "var(--primary-color)", marginBottom: "10px" }}
            >
              Site Map
            </Typography>
            <Stack
              direction='column'
              spacing={1}
              style={{ color: "var(--text-color)" }}
            >
              <Typography>Home</Typography>

              <Typography>About Us</Typography>

              <Typography>Contact Us</Typography>
            </Stack>
          </Box>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} sm={3}>
          <Box>
            <Typography
              variant='h6'
              style={{ color: "var(--primary-color)", marginBottom: "10px" }}
            >
              Our Clients
            </Typography>
            <Stack
              direction='column'
              spacing={1}
              style={{ color: "var(--text-color)" }}
            >
              <Typography>IBM</Typography>

              <Typography>Intel</Typography>

              <Typography>Apple</Typography>
            </Stack>
          </Box>
        </Grid>

        {/* Fourth Column */}
        <Grid item xs={12} sm={3} style={{marginBottom:"10px"}}>
          <Box>
            <Typography
              variant='h6'
              style={{ color: "var(--primary-color)", marginBottom: "10px" }}
            >
              Support
            </Typography>
            <Stack
              direction='column'
              spacing={1}
              style={{ color: "var(--text-color)" }}
            >
              <Typography>Terms & Conditions</Typography>

              <Typography>Privacy Policy</Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TopFooter;
