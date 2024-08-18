import React from "react";
import "./HeroBottomBox.css";

const HeroBottomBox = (props) => {
  return (
    <div className="hero-bottom-box w-[100%] h-[100%] overflow-hidden relative">
      <img
        src={props.img}
        className="w-[100%] h-[100%] object-cover hover:scale-105 duration-300"
        alt={props.img1}
      />
      {/* information */}
      <div className="hero-bottom-box-info absolute bottom-0 left-0 bg-gradient-to-t from-black to-black/20 w-[100%] flex items-center justify-center h-[0px] opacity-0 duration-300">
        <h1 className="text-white text-[25px]">{props.name}</h1>
      </div>
    </div>
  );
};

export default HeroBottomBox;
