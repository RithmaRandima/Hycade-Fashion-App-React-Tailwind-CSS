import React from "react";
import "./AboutUsBottomBox.css";

const AboutUsBottomBox = (props) => {
  return (
    <div className="about-bottom-box w-[100%] h-[100%] pb-[20px]">
      <div className="h-[150px] md:h-[200px] w-[100%] bg-black overflow-hidden">
        <img
          src={props.img}
          className="w-[100%] h-[100%] object-cover hover:scale-105 duration-300"
          alt={props.img}
        />
      </div>
      {/* information */}
      <div className="text-center md:text-left md:pr-[12px]">
        <h1 className="text-black text-[15px] md:text-[22px] my-4 font-[600] tracking-[2px]">
          {props.title} Lorem ipsum dolor.
        </h1>
        <p className="tracking-[1px] hidden md:block ">
          {props.description}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
          blanditiis perferendis atque vel cupiditate reprehenderit nobis ab
          distinctio
        </p>
        <div className="about-bottom-btn relative mt-[1px] w-fit mx-auto md:ml-[1px] md:mt-[23px] text-[16px] tracking-[1px] font-[700] pb-[10px]">
          <p className="cursor-pointer">see more</p>
          <div className="about-btn-bottom-bar absolute bottom-0 left-0 bg-black w-[30px] h-[3px] duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBottomBox;
