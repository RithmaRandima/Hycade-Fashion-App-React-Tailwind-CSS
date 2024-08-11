import React from "react";
import HeroBottomBox from "./HeroBottomBox/HeroBottomBox";

const HeroBottomSection = () => {
  return (
    <div className="flex flex-col  mb-[40px] pb-[10px]">
      <div className="w-[100%] mx-auto h-[200px] py-[20px] px-[40px] box-border grid grid-cols-4 gap-5">
        <HeroBottomBox />
        <HeroBottomBox />
        <HeroBottomBox />
        <HeroBottomBox />
      </div>
      <div className="w-[100%] h-[100%] mt-[40px] flex flex-col items-center justify-center text-center">
        <h1 className="text-[55px] mb-[5px]">Highly Customizable</h1>
        <p className="text-[16px] w-[40%] tracking-[2px] mx-auto">
          Style your products and shop pages, add a cart widget to your header,
          and convert clicks into sales.
        </p>
      </div>
    </div>
  );
};

export default HeroBottomSection;
