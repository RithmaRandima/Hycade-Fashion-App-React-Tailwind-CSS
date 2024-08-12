import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import AboutUsBottomSection from "../components/AboutUsBottomSection/AboutUsBottomSection";
import AboutProgressSection from "../components/AboutProgressSection/AboutProgressSection";
import AboutParallaxShop from "../components/AboutParallaxShop/AboutParallaxShop";
import Testimonials from "../components/Testimonials/Testimonials";

const AboutUsPage = () => {
  return (
    <div className="h-[700vh]">
      <AboutUs />
      <AboutUsBottomSection />
      <AboutProgressSection />
      <AboutParallaxShop />
      <Testimonials />
    </div>
  );
};

export default AboutUsPage;
