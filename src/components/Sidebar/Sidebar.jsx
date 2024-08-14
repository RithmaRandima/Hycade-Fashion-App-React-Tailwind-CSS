import React, { useContext } from "react";
import img1 from "../../assets/hero-bg-2.webp";
import { ShopContext } from "../../App";

const Sidebar = () => {
  const { sideBar, setSideBar } = useContext(ShopContext);
  // "fixed z-30 h-[95vh] w-[420px] bg-white right-0 top-0 flex flex-col items-center pt-[80px] gap-7 px-10"
  return (
    <div
      className={
        sideBar
          ? "fixed z-30 h-[100vh] w-[410px] bg-white right-0 top-0 flex flex-col items-center pt-[60px] gap-7 px-10 duration-300"
          : "fixed z-30 h-[100vh] w-[410px] bg-white right-[-410px] top-0 flex flex-col items-center pt-[60px] gap-7 px-10 duration-300"
      }
    >
      {/* logo */}
      <div className="logo relative bg-black h-[44px] italic w-[200px]">
        <h1 className=" absolute text-white italic text-[50px] font-[700] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] trans">
          Hycade
        </h1>
      </div>

      <div className="w-[85%] h-[205px]  grid grid-cols-3 gap-2">
        <div className="w-[100%] h-[90px] bg-blue-50">
          <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
        </div>
        <div className="w-[100%] h-[90px] bg-blue-50">
          <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
        </div>
        <div className="w-[100%] h-[90px] bg-blue-50">
          <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
        </div>
        <div className="w-[100%] h-[90px] bg-blue-50">
          <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
        </div>
        <div className="w-[100%] h-[90px] bg-blue-50">
          <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
        </div>
        <div className="w-[100%] h-[90px] bg-blue-50">
          <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
