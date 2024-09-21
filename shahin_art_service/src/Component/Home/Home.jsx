import React from "react";
import Hero from "../Hero/Hero";
import WhyWeAre from "../../Pages/WhyWeAre/WhyWeAre";
import OurServices from "../OurServices/OurServices";
import OurExpertise from "../OurExpertise/OurExpertise";
import GetInTouch from "../GetInTouch/GetInTouch";
import OurMission from "../OurMission/OurMission";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyWeAre />
      <OurServices />
      <OurMission />
      <OurExpertise />
      <GetInTouch />
    </>
  );
};

export default Home;
