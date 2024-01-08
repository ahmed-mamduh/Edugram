import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import Header from "./Headers";
import CategoryCardRow from "./CategoryCardRow";
import SubjectsCarousel from "./SubjectsCarousel";
import { useGetSubjectCoursesMutation } from "../../store/apiSlice/apiSlice";

const TopCategories = () => {
  const [tabId, setTabId] = useState(10);
  const [fetchCourses, { data: courses }] = useGetSubjectCoursesMutation();

  useEffect(() => {
    if (tabId) {
      const fetchData = async () => {
        await fetchCourses({ subject_id: tabId, pageNum: 1, pageSize: 4 });
      };
      fetchData();
    }
  }, [fetchCourses, tabId]);

  const displayedCourses = courses?.data.courses || [];

  return (
    <>
      {/* Category cards */}
      <Stack
        style={{
          backgroundColor: "#F3F3F3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0 20px 0",
        }}
      >
        <Header
          header='Top Categories'
          details='Learn the latest skills to reach your professional goals'
        />
        <div style={{ width: "80%" }}>
       
          <SubjectsCarousel tabId={tabId} setTabId={setTabId} />

          {/* Render cards if available, or an empty space if no cards */}
          {displayedCourses.length > 0 ? (
            <CategoryCardRow
              displayedCourses={displayedCourses}
              tabId={tabId}
            />
          ) : (
            <div style={{ height: "200px" }} />
          )}

          {displayedCourses.length === 0 && <div style={{ height: "250px" }} />}
        </div>

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
    </>
  );
};

export default TopCategories;
