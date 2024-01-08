import React from "react";
import { Grid } from "@mui/material";
import CategoryCard from "../molecules/CategoryCard";

const CategoryCardRow = React.memo(({ displayedCourses }) => {
  return (
    <Grid container spacing={3}>
      {displayedCourses?.map((category, index) => (
        <Grid
          item
          xs={12}
          sm={3}
          md={6}
          lg={3}
          key={index}
          style={{ height: "100%" }}
        >
          <CategoryCard {...category} />
        </Grid>
      ))}
    </Grid>
  );
});

export default CategoryCardRow;
