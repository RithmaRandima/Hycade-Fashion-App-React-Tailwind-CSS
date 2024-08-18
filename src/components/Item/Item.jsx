import React from "react";
import "./Item.css";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

const Item = (props) => {
  return (
    <div className="items-container w-[96%] h-[350px] relative text-center ml-1 mb-[40px] cursor-pointer">
      {/* img container */}
      <div className="w-[100%] h-[320px] overflow-hidden">
        <img
          src={props.img}
          className="w-[100%] h-[320px] object-cover duration-500"
          alt=""
        />
      </div>
      <div className="item-middle-content w-[70%] bg-white box-border h-[50px] absolute z-10 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] grid grid-cols-3  py-2 duration-300 opacity-0">
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

      <h1 className="bg-black text-white hover:text-yellow-400 w-fit mx-auto mt-3 text-[17px] font-[900] px-2 tracking-[2px]">
        $ {props.price}
      </h1>
      <div className="flex gap-3 mt-[10px] justify-center items-center">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
      </div>

      {/*new sticker */}
      {props.newItems === true ? (
        <div className="z-[30] absolute top-[10px] bg-black text-white px-3 py-1 tracking-[3px] text-[12px] font-[700] left-[10px]">
          new
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Item;
