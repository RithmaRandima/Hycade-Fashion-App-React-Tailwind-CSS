import React from "react";
import "./Item.css";
import img1 from "../../assets/main-image-1.jpeg";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Item = () => {
  return (
    <div className="items-container w-[100%] h-[350px] relative text-center mb-[20px]">
      <img src={img1} className="w-[100%] h-[320px] object-cover" alt="" />
      <div className="item-middle-content w-[70%] bg-white box-border h-[50px] absolute z-10 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] grid grid-cols-3 py-2 duration-300 opacity-0">
        <div className="flex items-center justify-center border-r-2 border-[#00000048] ">
          <FaEye className="cursor-pointer" />
        </div>
        <div className="flex items-center justify-center border-r-2 border-[#00000048] ">
          <FaHeart className="cursor-pointer" />
        </div>
        <div className="flex items-center justify-center">
          <FaCartShopping className="cursor-pointer" />
        </div>
      </div>

      <h1>rithma</h1>
      <p>asfgh</p>
    </div>
  );
};

export default Item;
