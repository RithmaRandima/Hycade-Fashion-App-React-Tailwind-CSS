import React from "react";
import LookBookBox from "./LookBookBox/LookBookBox";
import { galleryData } from "../../data/GalleryData";

const LookBook = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center">
      {/* title text */}
      <div className="text-center w-[80%] md:w-[50%] mx-auto mb-[30px] m-[20px] flex items-center flex-col">
        <h1 className="text-[45px] font-[500] mb-4">gallery</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          veniam nostrum veritatis fuga corrupti consequuntur id corporis velit,
          eos mollitia?
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

      {/* gallery content */}
      <div className="w-[98%] h-[100%] mx-auto grid grid-cols-2 md:grid-cols-4 p-3 gap-6">
        {galleryData.map((data) => {
          return (
            <LookBookBox
              key={data.id}
              img={data.img}
              title={data.title}
              subTitle={data.subtitle}
              price={data.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LookBook;
