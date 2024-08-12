import React from "react";
import Hero from "../components/Hero/Hero";
import HeroBottomSection from "../components/HeroBottomSection/HeroBottomSection";
import ParallaxShop from "../components/ParallaxShop/ParallaxShop";
import PopularSection from "../components/PopularSection/PopularSection";

const Shop = () => {
  return (
    <div>
      <Hero />
      <HeroBottomSection />
      <ParallaxShop />
      <PopularSection />
    </div>
  );
};

export default Shop;
