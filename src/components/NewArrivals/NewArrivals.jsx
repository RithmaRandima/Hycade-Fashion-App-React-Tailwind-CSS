import React from "react";
import bgImage from "../../assets/Parallax-Background.jpg";
import Item from "../Item/Item";
import { Background, Parallax } from "react-parallax";

const NewArrivals = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col bg-cover">
      <Parallax strength={500} className="w-[100%] h-[100%]">
        <Background className="custom-bg w-[100vw] h-[200vh] overflow-hidden">
          <img
            src={bgImage}
            alt="fill murray"
            className="w-[100%] h-[100%] object-cover"
          />
        </Background>
        {/* top text */}
        <div className="text-center w-[50%] mx-auto m-[20px] flex items-center flex-col">
          <h1 className="text-[45px] font-[500] mb-4">new arrivals</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            veniam nostrum veritatis fuga corrupti consequuntur id corporis
            velit, eos mollitia?
          </p>
          {/* bottom bar */}
          <div className="w-[140px] bg-transparent h-[7px] flex mt-[20px]">
            <div className="w-[80px] bg-black h-[100%]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[20px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          </div>
        </div>

        {/* items section */}
        <div className="w-[97%] mx-auto h-[100%] grid grid-cols-5  gap-[20px] pb-[40px]">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </Parallax>
    </div>
  );
};

export default NewArrivals;
