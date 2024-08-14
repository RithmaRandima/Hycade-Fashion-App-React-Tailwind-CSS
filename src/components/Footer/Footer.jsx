import React from "react";
import { Background, Parallax } from "react-parallax";
import img1 from "../../assets/hero-bg-3.webp";

const Footer = () => {
  return (
    <div className="w-[100%] h-[70vh] ">
      {/* top */}
      <Parallax strength={200} className="w-[100%] h-[100%]">
        <Background className="custom-bg w-[100vw] h-[100%] overflow-hidden">
          <img
            src={img1}
            alt="fill murray"
            className="hero-bg-image w-[100%] h-[100%] object-cover"
          />
        </Background>
        <div className="w-[100%] h-[60vh] flex items-center px-[60px]">
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
        <div className="flex flex-row justify-between w-[100%] h-[10vh] px-10 items-center py-4 gap-7  bg-[#000000] text-white">
          <p className="text-[10px] md:text-[8px] tracking-[4px]">
            © 2023 the<span className="text-[#00ffee] font-bold">walk</span> ALL
            RIGHTS RESERVED.
          </p>

          <div className="logo relative bg-white h-[24px] italic w-[120px]">
            <h1 className=" absolute text-black italic text-[30px] font-[700] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] trans">
              Hycade
            </h1>
          </div>

          <p className="hidden md:block text-[10px] font-bold tracking-[4px]">
            FLY ABOVE THE WORLD
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Footer;
