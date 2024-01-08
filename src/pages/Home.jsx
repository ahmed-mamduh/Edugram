// src/pages/Home.jsx
import React from "react";

import Navbar from "../components/organisms/NavBar"
import Footer from "../components/organisms/Footer";
import SectionOne from "../components/organisms/SectionOne";
import SectionTwo from "../components/organisms/SectionTwo";
import TopCategories from "../components/organisms/TopCategories";
import EdugramBenefits from "../components/organisms/EdugramBenefits";
import MostPopular from "../components/organisms/MostPopular";
import Clients from "../components/organisms/Clients";
import PopularCertificate from "../components/organisms/PopularCertificate";

const Home = () => {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <TopCategories />
      <EdugramBenefits />
      <MostPopular />
      <Clients />
      <PopularCertificate />
      <Footer />
    </>
  );
};

export default Home;
