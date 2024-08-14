import React from "react";
import Hero from "../components/Hero/Hero";
import HeroBottomSection from "../components/HeroBottomSection/HeroBottomSection";
import ParallaxShop from "../components/ParallaxShop/ParallaxShop";
import PopularSection from "../components/PopularSection/PopularSection";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import NewItemsSection from "../components/NewItemsSection/NewItemsSection";
import ShopNewsLetter from "../components/ShopNewsLetter/ShopNewsLetter";
import Blog from "../components/Blog/Blog";

const Shop = () => {
  return (
    <div className="scroll-smooth">
      <Hero />
      <HeroBottomSection />
      <ParallaxShop />
      <PopularSection />
      <NewItemsSection />
      <NewArrivals />
      <ShopNewsLetter />
      <Blog />
    </div>
  );
};

export default Shop;
