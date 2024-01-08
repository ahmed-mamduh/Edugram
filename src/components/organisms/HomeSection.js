import { Stack, Typography, Box } from "@mui/material";

function HomeSection({ title, subtitle, content }) {
  return (
    <Stack
      spacing='30px'
      style={{ backgroundColor: "var( --secondary-background-color)" }}
    >
      <Stack
        padding='0px 80px'
        spacing='15px'
        alignItems='center'
        style={{ margin: "15px" }}
      >
        <Typography variant='h4' color='var(--secondary-color)'>
          {title}
        </Typography>
        <Typography textAlign='center' fontSize='13px' fontWeight={500}>
          {subtitle}
        </Typography>
      </Stack>
      <Box>{content}</Box>
    </Stack>
  );
}

export default HomeSection;
