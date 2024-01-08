import { Stack, Typography } from "@mui/material";
function Header({ header, details }) {
  return (
    <Stack
      spacing={2}
      alignItems='center'
      justifyContent='center'
      marginTop={5}
      marginBottom={3}
      textAlign='center'
    >
      <Typography
        sx={{
          height: 42,
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: 1.066666603088379,
          color: "#FFBA00",
          whiteSpace: "nowrap",
        }}
      >
        {header}
      </Typography>
      <Typography
        sx={{
          maxWidth: 284,
          height: 42,
          top: 59,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 0.43333330750465393,
          color: "#343434",
        }}
      >
        {details}
      </Typography>
    </Stack>
  );
}
export default Header;
