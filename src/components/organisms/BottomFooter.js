import { Grid } from "@mui/material";
import React from "react";

const BottomFooter = () => {
  return (
    <>
      <Grid
        style={{
          backgroundColor: "var(--secondary-background-color)",
          textAlign: "center",
          padding: "20px",
          color: "var(--text-color)",
        }}
      >
        Designed and developed at inova LLC
      </Grid>
    </>
  );
};

export default BottomFooter;
