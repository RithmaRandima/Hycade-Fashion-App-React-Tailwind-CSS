import React from "react";
import StaffBox from "./StaffBox/StaffBox";

const Staff = () => {
  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
      {/* title */}
      <div className="text-center py-[40px]">
        <h1 className="text-[45px] lowercase tracking-[2px] font-[500]">
          Meet our Team
        </h1>
        <p>
          We design new products. You crowd-fund them at incredible prices.
          Grayson. Everybody wins.
        </p>

        <div className="w-[120px] bg-transparent h-[5px] flex mt-4 mx-auto ">
          <div className="w-[60px] bg-black h-[100%]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[20px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
        </div>
      </div>

      {/* staff box section */}
      <div className="w-[90%] h-[100%] mx-auto grid grid-cols-4 gap-[30px] mb-[20px]">
        <StaffBox />
        <StaffBox />
        <StaffBox />
        <StaffBox />
        <StaffBox />
        <StaffBox />
        <StaffBox />
        <StaffBox />
      </div>
    </div>
  );
};

export default Staff;
