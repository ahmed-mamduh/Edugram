import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Button, Typography, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useGetSubjectsQuery } from "../../store/apiSlice/apiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material/styles";

const SubjectsCarousel = ({ tabId, setTabId }) => {
  const [gridSize, setGridSize] = useState({ xs: 10 });
  const { data } = useGetSubjectsQuery();
  const filters = data?.data?.subjects || [];
  const [activeIndex, setActiveIndex] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handleFilterClick = (index, filter) => {
    setTabId(filter.id);
    sliderRef.current.slickGoTo(index);
    setActiveIndex(activeIndex === index ? null : index);
  };

  const slickSettings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    slidesToShow: slidesToShow,
    afterChange: (index) => {
      setActiveIndex(index);
    },
  };

  const theme = useTheme();

  const smallScreenMediaQuery = window.matchMedia("(max-width: 600px)");
  const mediumScreenMediaQuery = window.matchMedia(
    `(min-width: ${theme.breakpoints.values.sm}px) and (max-width: ${
      theme.breakpoints.values.md - 1
    }px)`
  );

  const updateSlidesToShow = () => {
    if (smallScreenMediaQuery.matches) {
      // Styles for small screens
      setSlidesToShow(1);
      setGridSize({ xs: 6 });
    } else if (mediumScreenMediaQuery.matches) {
      // Styles for medium screens
      setSlidesToShow(3);
      setGridSize({ xs: 8 });
    } else {
      // Styles for larger screens
      setSlidesToShow(5);
      setGridSize({ xs: 10 });
    }
  };

  useEffect(() => {
    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div>
      <Grid container spacing={2} alignItems='center'>
        <Grid item>
          <Button onClick={handlePrev} style={{ cursor: "pointer" }}>
            <ArrowBackIcon />
          </Button>
        </Grid>
        <Grid item {...gridSize}>
          <Slider ref={sliderRef} {...slickSettings}>
            {filters.map((filter, index) => (
              <div key={index} onClick={() => handleFilterClick(index, filter)}>
                <Typography
                  variant='h6'
                  style={{ padding: "10px", margin: "0 5px" }}
                >
                  {activeIndex === index
                    ? filter.name
                    : filter.name.length > 25
                    ? `${filter.name.substring(0, 24)}...`
                    : filter.name}
                </Typography>
              </div>
            ))}
          </Slider>
        </Grid>
        <Grid item>
          <Button onClick={handleNext} style={{ cursor: "pointer" }}>
            <ArrowForwardIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SubjectsCarousel;
