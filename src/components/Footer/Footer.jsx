import React from "react";
import { Background, Parallax } from "react-parallax";
import img1 from "../../assets/hero-bg-3.webp";

const Footer = () => {
  return (
    <div className="w-[100%] h-[80vh] ">
      {/* top */}
      <Parallax strength={200} className="w-[100%] h-[100%]">
        <Background className="custom-bg w-[100vw] h-[100%] overflow-hidden">
          <img
            src={img1}
            alt="fill murray"
            className="hero-bg-image w-[100%] h-[100%] object-cover"
          />
        </Background>
        <div className="w-[100%] h-[50vh] flex items-center px-[60px]">
          <p className="text-[45px] text-white tracking-[2px] mr-[60px] font-[700]">
            subscribe
          </p>
          <div className="flex items-center w-[950%]">
            <input
              type="text"
              className="w-[100%] py-[13px] outline-none px-[30px] bg-transparent text-[17px] text-white border-2"
              placeholder="your email"
            />
            <p className="bg-white w-[200px] font-[700] tracking-[2px] h-[55px] flex items-center justify-center">
              subscribe
            </p>
          </div>
        </div>

        {/* bottom */}
        <div className="w-[100%] h-[30vh] bg-black"></div>
      </Parallax>
    </div>
  );
};

export default Footer;
