import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { PiPinterestLogo, PiPinterestLogoFill } from "react-icons/pi";
import img1 from "../../../assets/hero-bg-1.webp";

const StaffBox = () => {
  return (
    <div className="w-[100%] h-[100%] pb-[20px]">
      {/* img container */}
      <div className="w-[100%] h-[300px] overflow-hidden relative">
        <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
        {/* social overlay */}
        <div className="absolute w-[100%] h-[50px] bg-black/30 bottom-0 flex items-center justify-center text-white gap-[13px] text-[17px] ">
          <FaFacebook className="hover:text-yellow-500 hover:scale-110 duration-200" />
          <PiPinterestLogoFill className="hover:text-yellow-500 hover:scale-110 duration-200" />
          <FaInstagram className="hover:text-yellow-500 hover:scale-110 duration-200" />
          <FaLinkedinIn className="hover:text-yellow-500 hover:scale-110 duration-200" />
          <FaTwitter className="hover:text-yellow-500 hover:scale-110 duration-200" />
        </div>
      </div>
      {/* info */}
      <div>
        <h1 className="mt-4 tracking-[1px] text-[18px] font-[500]">
          RIthma Randima
        </h1>
        <p className="mt-1 text-[14px] tracking-[2px] font-[400] text-black/70">
          position
        </p>
      </div>
    </div>
  );
};

export default StaffBox;
