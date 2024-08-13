import React from "react";
import Hero from "../components/Hero/Hero";
import HeroBottomSection from "../components/HeroBottomSection/HeroBottomSection";
import ParallaxShop from "../components/ParallaxShop/ParallaxShop";
import PopularSection from "../components/PopularSection/PopularSection";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import NewItemsSection from "../components/NewItemsSection/NewItemsSection";

const Shop = () => {
  return (
    <div>
      <Hero />
      <HeroBottomSection />
      <ParallaxShop />
      <PopularSection />
      <NewItemsSection />
      <NewArrivals />
    </div>
  );
};

export default Shop;
