import React from "react";
import { Box, Stack } from "@mui/material";
import whatsApp from "../../assets/whatsApp.svg";
import Header from "./Headers";
import LearningProcessCard from "../molecules/LearningProcessCard";

const SectionTwo = () => {
  return (
    <>
      <Stack>
        <Box
          style={{
            position: "relative",
            backgroundColor: "#F3F3F3",
            padding: "15px",
          }}
        >
          <img
            style={{
              width: 65,
              height: 56,
              margin: "auto",
              position: "fixed",
              top: "60%",
              right: "30px",
              zIndex: "2",
            }}
            src={whatsApp}
            alt='whatsApp'
          />
          <Header
            header='Learning Process'
            details='Learn the latest skills to reach your professional goals'
          ></Header>
        </Box>
        <LearningProcessCard />
      </Stack>
    </>
  );
};

export default SectionTwo;
