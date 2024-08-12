import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import AboutUsBottomSection from "../components/AboutUsBottomSection/AboutUsBottomSection";
import AboutProgressSection from "../components/AboutProgressSection/AboutProgressSection";

const AboutUsPage = () => {
  return (
    <div className="h-[700vh]">
      <AboutUs />
      <AboutUsBottomSection />
      <AboutProgressSection />
    </div>
  );
};

export default AboutUsPage;
