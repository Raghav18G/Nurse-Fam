import React from "react";
import "./styles.css";
import HomeSection from "./HomeSection";
import PlatformSection from "./PlatformSection";
import JoinSection from "./JoinSection";
import HiringSection from "./HiringSection";
import AboutUsSection from "./AboutUsSection";
import FooterSection from "./FooterSection";

const Landing = () => {
  return (
    <div className="LandingPage--Container">
      <HomeSection />
      <PlatformSection />
      <JoinSection />
      <HiringSection />
      <AboutUsSection />
      <FooterSection />
    </div>
  );
};

export default Landing;
