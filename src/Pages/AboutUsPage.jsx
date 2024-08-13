import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import AboutUsBottomSection from "../components/AboutUsBottomSection/AboutUsBottomSection";
import AboutProgressSection from "../components/AboutProgressSection/AboutProgressSection";
import AboutParallaxShop from "../components/AboutParallaxShop/AboutParallaxShop";
import Testimonials from "../components/Testimonials/Testimonials";
import PricingSection from "../components/PricingSection/PricingSection";

const AboutUsPage = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutUs />
      <AboutUsBottomSection />
      <AboutProgressSection />
      <AboutParallaxShop />
      <PricingSection />
      <Testimonials />
    </div>
  );
};

export default AboutUsPage;
