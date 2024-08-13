import React from "react";
import { RiCheckDoubleFill } from "react-icons/ri";

const PricingBox = (props) => {
  return (
    <div className="pricing-box w-[100%] h-[100%]] bg-black/20  flex flex-col items-center justify-center p-3 ">
      {/* white box */}
      <div className="bg-white py-11 px-7 text-center">
        <p className="text-[23px] font-[600] mb-1">{props.title}basic</p>
        <h1 className="text-[35px] font-[900] mb-4">$ {props.price} 39.99</h1>
        <p className="font-[300] mb-4">
          {props.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit natus
          voluptates nihil iste culpa.
        </p>

        <div className="w-[90px] bg-transparent h-[5px] flex mt-4 mx-auto ">
          <div className="w-[45px] bg-black h-[100%]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
        </div>

        {/* middle section */}
        <div className="my-10">
          <div className="flex items-center gap-[20px] mb-5">
            <RiCheckDoubleFill size={22} />
            <p>Lorem ipsum dolor sit amet conem.</p>
          </div>

          <div className="flex items-center gap-[20px] mb-5">
            <RiCheckDoubleFill size={22} />
            <p>Lorem ipsum dolor sit amet conem.</p>
          </div>

          <div className="flex items-center gap-[20px] mb-5">
            <RiCheckDoubleFill size={22} />
            <p>Lorem ipsum dolor sit amet conem.</p>
          </div>
        </div>

        <div className="about-bottom-btn relative mt-[23px] text-[16px] tracking-[1px] font-[700] pb-[10px] w-fit mx-auto">
          <p className="cursor-pointer">subscribe</p>
          <div className="about-btn-bottom-bar absolute bottom-0 left-0 bg-black w-[30px] h-[3px] duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
