import React from "react";
import HeroBottomBox from "./HeroBottomBox/HeroBottomBox";

import img1 from "../../assets/hero-bottom-1.jpeg";
import img2 from "../../assets/hero-bottom-2.jpeg";
import img3 from "../../assets/hero-bottom-3.jpeg";
const HeroBottomSection = () => {
  return (
    <div className="flex flex-col  mb-[40px] pb-[10px]  md:mt-[0] mt-[-120px]">
      {/* top section */}
      <div className="w-[95%] md:w-[85%] mx-auto h-[330px] place-items-center md:h-[240px] py-[20px] md:px-[40px] box-border grid grid-cols-3 gap-2  md:gap-5">
        <HeroBottomBox name={"Milano"} img={img1} />
        <HeroBottomBox name={"Paris"} img={img2} />
        <HeroBottomBox name={"Rome"} img={img3} />
      </div>

      {/* bottom section */}

      <div className="w-[100%] h-[100%] mt-[10px] md:mt-[40px] flex flex-col items-center justify-center text-center">
        <h1 className="hero-bottom-text text-[55px] mb-[5px]">
          Highly Customizable
        </h1>
        <p className="hero-bottom-text-small text-[14px] md:text-[16px] w-[40%] tracking-[2px] mx-auto">
          Style your products and shop pages, add a cart widget to your header,
          and convert clicks into sales.
        </p>
      </div>
    </div>
  );
};

export default HeroBottomSection;
