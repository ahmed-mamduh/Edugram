import Header from "./Headers";
import { useMediaQuery, Stack, Box, Button } from "@mui/material";
import Apple from "../../assets/apple.svg";
import Intel from "../../assets/intel.svg";
import IBM from "../../assets/ibm.svg";
import Microsoft from "../../assets/microsoft.svg";
import Google from "../../assets/google.svg";
import { useState } from "react";

function Clients() {
  const [viewAll, setViewAll] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:600px)");
  const stackStyle = {
    backgroundColor: "white",
    padding: "20px",
    position: "relative",
    width: isLargeScreen ? "100%" : "100%",
    overflow: "hidden",
  };

  const handleViewAllClick = () => {
    setViewAll(!viewAll);
  };

  let clientsLogos = [Apple, Intel, IBM, Microsoft, Google];
  let moreLogos = [
    Apple,
    Intel,
    IBM,
    Microsoft,
    Google,
    Apple,
    Intel,
    IBM,
    Microsoft,
    Google,
    Apple,
    Intel,
    IBM,
    Microsoft,
    Google,
    Apple,
    Intel,
  ];

  let viewLessContent = clientsLogos.map((logo, index) => (
    <Box component='span' textAlign='center' width='20%' key={index}>
      <img src={logo} alt='logo' />
    </Box>
  ));

  let viewAllContent = moreLogos.map((logo, index) => (
    <Box component='span' textAlign='center' width='20%' key={index}>
      <img src={logo} alt='logo' />
    </Box>
  ));

  return (
    <>
      <Stack style={stackStyle}>
        <Header header='Our Clients' />
        <Button
          variant='text'
          onClick={handleViewAllClick}
          sx={{
            fontSize: "26px",
            fontWeight: 600,
            right: "10px",
            top: "10px",
            position: "absolute",
            zIndex: "2 ",
            color: "var(--primary-color)",
          }}
        >
          {viewAll ? "View Less" : "View All"}
        </Button>
        <Box position='relative'></Box>
        <Stack direction='row' flexWrap='wrap' alignItems='center'>
          {viewLessContent}
          {viewAll && viewAllContent}
        </Stack>
      </Stack>
    </>
  );
}

export default Clients;
