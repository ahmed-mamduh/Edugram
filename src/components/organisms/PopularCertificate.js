import { Stack, Typography, Button } from "@mui/material";
import CustomTabs from "../molecules/CustomTabs";
import HomeSection from "./HomeSection";
import ibmIcon from "../../assets/ibm.svg";
import googleIcon from "../../assets/googleCertificate.svg";
import googleCloud from "../../assets/googleCloud.svg";
import CustomCard from "../molecules/CustomCard";

function PopularCertificates() {
  let title = "Popular Certificates";
  let subtitle = (
    <>
      Break into a new field. No prior experience <br /> necessary to get
      started
    </>
  );

  let certificates = [
    { name: "Master Track Certificates", id: 0 },
    { name: "IT Certificates", id: 1 },
    { name: "University Certificates", id: 2 },
    { name: "Master Certificates", id: 3 },
  ];

  let cards = [
    {
      media: googleIcon,
      content: (
        <>
          Google IT Support <br /> Professional Certificate
        </>
      ),
      actions: "Google",
    },
    {
      media: ibmIcon,
      content: (
        <>
          IBM Cybersecurity Analyst <br /> Professional Certificate
        </>
      ),
      actions: "IBM",
    },
    {
      media: googleCloud,
      content: (
        <>
          Cloud Security Engineer <br /> Professional Certificate
        </>
      ),
      actions: "Google Cloud",
    },
    {
      media: ibmIcon,
      content: (
        <>
          IBM Cybersecurity Analyst <br /> Professional Certificate
        </>
      ),
      actions: "IBM",
    },
  ];

  let renderedCards = cards.map((card, index) => {
    let media = (
      <Stack
        alignItems='center'
        justifyContent='center'
        flexWrap='wrap'
        sx={{
          width: "272px",
          height: "251px",
        }}
      >
        <img src={card.media} alt='certificate organization' />
      </Stack>
    );

    let content = (
      <Typography noWrap fontSize='17px' fontWeight={600} color='#000000'>
        {card.content}
      </Typography>
    );

    let actions = (
      <Typography fontSize='20px' fontWeight={600} color='#343434'>
        {card.actions}
      </Typography>
    );

    return (
      <CustomCard
        key={index}
        media={media}
        content={content}
        actions={actions}
        backgroundColor='white'
      />
    );
  });

  let content = (
    <Stack
      style={{ backgroundColor: "var( --secondary-background-color)" }}
      padding='0px 80px'
      spacing='80px'
      marginBottom='100px'
    >
      <Stack spacing='50px'>
        <CustomTabs value={1} tabs={certificates} tabWidth='281px' />
        <Stack
          direction='row'
          spacing={1}
          style={{ marginBottom: "50px" }}
          alignItems='center'
          justifyContent='center'
          flexWrap='wrap'
        >
          {renderedCards}
        </Stack>
      </Stack>
      <Stack alignItems='center'>
        <Button
          variant='contained'
          sx={{
            backgroundColor: "var( --primary-color)",
            width: "314px",
            height: "52px",
            fontSize: "20px",
            "&:hover": {
              backgroundColor: "var( --primary-color)",
            },
          }}
        >
          View More Certificates
        </Button>
      </Stack>
    </Stack>
  );

  return <HomeSection title={title} subtitle={subtitle} content={content} />;
}

export default PopularCertificates;
