import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { PiPinterestLogoFill } from "react-icons/pi";

import "./StaffBox.css";

const StaffBox = (props) => {
  return (
    <div className="staff-box w-[100%] h-[100%] pb-[20px]">
      {/* img container */}
      <div className="w-[100%] h-[300px] overflow-hidden relative">
        <img
          src={props.img}
          className="w-[100%] h-[100%] object-cover duration-300"
          alt=""
        />
        {/* social overlay */}
        <div className="link-overlay absolute w-[100%] h-[0px] overflow-hidden duration-300 bg-gradient-to-t from-black/70 to-black/20 bottom-0 flex items-center justify-center text-white gap-[13px] text-[17px] ">
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
          {props.name}
        </h1>
        <p className="mt-1 text-[14px] tracking-[2px] font-[400] text-black/70">
          {props.position}
        </p>
      </div>
    </div>
  );
};

export default StaffBox;
