import React from "react";
import "./LookBookBox.css";
import img1 from "../../../assets/blog-2.jpg";
import { FaEye, FaHeart } from "react-icons/fa";

const LookBookBox = (props) => {
  return (
    <div className="look-book-box w-[100%] h-[360px] md:h-[450px] relative overflow-hidden">
      <img
        // src={img1}
        src={props.img}
        className="w-[100%]  h-[100%] object-cover duration-300 "
        alt=""
      />
      {/* overlay box */}
      <div className="look-book-box-overlay z-10 absolute left-0 top-0 bg-black/50  w-[100%] h-[100%]  text-white opacity-0">
        <div className="absolute look-book-box-overlay-text w-[100%] h-[100%] flex flex-col justify-start items-center opacity-0 top-[-10%]  duration-300">
          <h1 className="text-[22px] font-[700] lowercase tracking-[2px]">
            {props.title}
          </h1>
          <h1>{props.subtitle}street style</h1>
          <p className="text-[30px] font-[900] tracking-[2px]">
            $ {props.price}
          </p>
          <button className="bg-yellow-400 text-black px-5 py-2 text-[10px] font-[500] tracking-[1px] hover:bg-white mt-2">
            add to cart
          </button>
        </div>
      </div>

      {/* bottom button */}
      <div className="look-book-buttons absolute z-20 box-border right-[0]  bottom-[-20%] grid grid-cols-2 gap-[2px] duration-300">
        <div className="flex items-center justify-center bg-black/80 text-white w-[40px] h-[40px] text-[13px]">
          <FaHeart className="hover:text-yellow-400 hover:scale-110 cursor-pointer" />
        </div>
        <div className="flex items-center justify-center bg-black/80 text-white w-[40px] h-[40px] text-[13px] ">
          <FaEye className="hover:text-yellow-400 hover:scale-110 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default LookBookBox;
