import React from "react";
import { Box, Container, Typography } from "@mui/material";
import pointer from "../../assets/Group 1094.svg";
import books from "../../assets/Group 1095.svg";
import achievement from "../../assets/Group 1096.svg";

const LearningProcessCard = ({ imgName, title }) => {
  const imageStyle = { width: 137, height: 137 };
  const textStyle = { fontWeight: 700, fontSize: 24 };
  return (
    <>
      <Container style={{ padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{}}>
            <img style={imageStyle} src={pointer} alt='chooseCourse' />
            <Typography sx={textStyle}>Choose course</Typography>
          </Box>
          <Box sx={{}}>
            <img style={imageStyle} src={books} alt='start-learning' />
            <Typography sx={textStyle}>Start learning</Typography>
          </Box>
          <Box sx={{}}>
            <img style={imageStyle} src={achievement} alt='getCertificate' />
            <Typography sx={textStyle}>Get Certificate </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LearningProcessCard;
