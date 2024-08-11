import React from "react";
import img1 from "../../../assets/hero-bg-1.webp";
import "./HeroBottomBox.css";

const HeroBottomBox = () => {
  return (
    <div className="hero-bottom-box w-[100%] h-[100%] bg-black overflow-hidden relative">
      <img
        src={img1}
        className="w-[100%] h-[100%] object-cover hover:scale-105 duration-300"
        alt={img1}
      />
      {/* information */}
      <div className="hero-bottom-box-info absolute bottom-0 left-0 bg-gradient-to-t from-black to-black/20 w-[100%] flex items-center justify-center h-[0px] opacity-0 duration-300">
        <h1 className="text-white text-[25px]">Rithma</h1>
      </div>
    </div>
  );
};

export default HeroBottomBox;
