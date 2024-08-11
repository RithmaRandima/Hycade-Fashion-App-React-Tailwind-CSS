import React, { useContext } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { ShopContext } from "../../App";

const Navbar = () => {
  const { sideBar, setSideBar } = useContext(ShopContext);
  return (
    <div className="absolute z-50 w-[100%] h-[100px] flex items-center justify-between px-[40px]">
      {/* Logo */}
      <div className="logo relative bg-white h-[24px] italic w-[120px]">
        <h1 className=" absolute text-black italic text-[30px] font-[700] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] trans">
          Hycade
        </h1>
      </div>
      <button
        className="text-white text-[20px]"
        onClick={() => {
          setSideBar(!sideBar);
        }}
      >
        {sideBar ? (
          <FaTimes style={{ color: sideBar === true ? "black" : "white" }} />
        ) : (
          <FaBars />
        )}
      </button>
    </div>
  );
};

export default Navbar;
