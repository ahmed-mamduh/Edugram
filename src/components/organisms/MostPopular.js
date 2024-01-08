import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Grid } from "@mui/material";
import Header from "./Headers";
import CategoryCardRow from "./CategoryCardRow";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useGetSubjectCoursesMutation } from "../../store/apiSlice/apiSlice";

const MostPopular = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const [fetchCourses, { data: courses, isLoading, isError }] =
    useGetSubjectCoursesMutation();

  useEffect(() => {
    const fetchData = async () => {
      await fetchCourses({ subject_id: 10, pageNum: 1, pageSize: 4 });
    };

    fetchData();
  }, [fetchCourses]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 960) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  const displayedCourses = courses?.data.courses || [];

  const displayedSlice = displayedCourses.slice(
    startIndex,
    startIndex + cardsToShow
  );

  const hasNext = displayedCourses.length > startIndex + cardsToShow;

  const handleNext = () => {
    if (hasNext) {
      setStartIndex((prevIndex) => prevIndex + cardsToShow);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - cardsToShow);
    }
  };

  return (
    <Stack
      style={{
        backgroundColor: "#F3F3F3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0 20px 0",
      }}
    >
      <Box>
        <Header
          header='Most Popular'
          details='Learn the latest skills to reach your professional goals'
        />
      </Box>
      <Stack
        style={{
          margin: "auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid item container justifyContent='center' alignItems='center'>
          <Grid item>
            <Button onClick={handlePrev}>
              <ArrowBackIcon />
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            lg={8}
            sm={8}
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CategoryCardRow displayedCourses={displayedSlice} />
          </Grid>

          <Grid item>
            <Button onClick={handleNext}>
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>
      </Stack>

      {/* "View More Courses" button */}
      <Button
        variant='contained'
        sx={{
          width: "314px",
          height: "52px",
          backgroundColor: "#28A19C",
          color: "#fff",
          margin: "auto",
          filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16))",
          "&:hover": {
            backgroundColor: "#28A19C",
          },
        }}
      >
        View More Courses
      </Button>
    </Stack>
  );
};

export default MostPopular;
