import React from "react";
import PricingBox from "./PricingBox/PricingBox";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <div className="w-[100%] h-[100%] mt-[30px] md:mt-[100px] bg-red300 pb-4">
      {/* title */}
      <div className="text-center py-[40px]">
        <h1 className="text-[45px] lowercase tracking-[2px] font-[500]">
          choose your plan
        </h1>
        <p className=" w-[80%] mx-auto md:w-[50%]">
          We design new products. You crowd-fund them at incredible prices.
          Grayson. Everybody wins.
        </p>

        <div className="w-[120px] bg-transparent h-[5px] flex mt-4 mx-auto ">
          <div className="w-[60px] bg-black h-[100%]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[20px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
        </div>
      </div>

      {/* pricing box section */}
      <div className="w-[90%] md:w-[93%] h-[100%] mx-auto grid md:grid-cols-3 gap-[20px] mb-[20px]">
        <PricingBox />
        <PricingBox />
        <PricingBox />
      </div>
    </div>
  );
};

export default PricingSection;
