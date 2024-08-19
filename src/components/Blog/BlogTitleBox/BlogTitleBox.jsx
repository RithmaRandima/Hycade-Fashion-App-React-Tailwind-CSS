import React from "react";
import img1 from "../../../assets/Box-Outline.jpg";

const BlogTitleBox = (props) => {
  return (
    <div
      className="w-[100%] p-4 flex items-center justify-center my-[50px]"
      style={{
        backgroundImage: `url(${img1})`,
        height: props.height,
        backgroundSize: "cover",
      }}
    >
      <div className="w-[100%] h-[100%] flex items-center justify-center bg-white relative">
        <h1 className="font-[700] text-[20px] tracking-[3px] text-center p-4">
          {props.title}
        </h1>
        <p className="absolute bottom-[20px] left-[160px] text-[14px] tracking-[2px] text-black/50">
          <span>-</span>
          {props.author}
        </p>
      </div>
    </div>
  );
};

export default BlogTitleBox;
