import React from "react";
import { FaComments } from "react-icons/fa";
import { HiUser } from "react-icons/hi";

const BlogBox = (props) => {
  return (
    <div
      className="w-[100%] h-[420px] px-3 pb-4 mb-4 "
      style={{
        backgroundImage: `url(${props.serviceBgImg})`,
        backgroundSize: "cover",
      }}
    >
      {/* img container */}
      <div
        className="w-[100%] bg-black"
        style={{
          height: props.height,
        }}
      >
        <img
          src={props.img}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      {/* blog box info */}
      <div className="mt-4">
        <div>
          <span className="bg-yellow-400 text-white px-2 mr-3">
            {props.date} february 9, 2025{" "}
          </span>
          <span> style</span>
        </div>

        <h1 className="font-[700] text-[25px] ">tropical{props.title}</h1>

        <p className="font-[400] text-[14px] leading-[28px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          delectus et adipisci harum modi, provident voluptate optio totam
          placeat voluptas fugiat
        </p>

        {/* author */}
        <div className="flex items-center gap-3 mt-5">
          <div className="flex items-center bg-black text-white py-1 px-2 gap-2">
            <HiUser size={14} />
            <p className="text-[13px]">by admin</p>
          </div>

          {/* comment */}
          <div className="flex items-center bg-black text-white px-2 gap-2">
            <FaComments />
            <p>{props.commentCount}1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
