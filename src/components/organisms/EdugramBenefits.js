import { Grid, Stack, Typography } from "@mui/material";
import laptopGirl from "../../assets/Group 248.svg";
import checkMark from "../../assets/checkmark.svg";

function EdugramBenefits() {
  const benefits = [
    "Access 16,000+ expert-led courses.",
    "Expert instructors with lifetime access on your courses.",
    "Use project files and quizzes to practice while you learn.",
    "View courses anytime on your computer or phone",
    "Earn a certificate when you complete a course.",
  ];

  return (
    <Grid
      container
      justifyContent='space-between'
      flexWrap='wrap'
      style={{
        position: "relative",
        margin: "auto",
        width: "80%",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "10px",
        color: "var(--text-color)",
      }}
    >
      <Stack xs={6}>
        <img src={laptopGirl} alt='benefits' style={{ width: "100%" }} />
      </Stack>
      <Stack xs={6} style={{ top: "25px", width: "45%" }}>
        <Typography
          variant='h3'
          sx={{
            color: "var(--secondary-color)",
            mt: 20,
            width: "100%",
            margin: "auto",
          }}
        >
          Benefits Of Learning From
          <span style={{ color: "var(--primary-color)" }}> Edugram</span>
        </Typography>
        <Stack spacing='20px'>
          {benefits.map((benefit, index) => (
            <Stack direction='row' spacing='20px' key={index}>
              <img src={checkMark} alt='tick' />
              <Typography fontSize='18px' fontWeight={600}>
                {benefit}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Grid>
  );
}

export default EdugramBenefits;
