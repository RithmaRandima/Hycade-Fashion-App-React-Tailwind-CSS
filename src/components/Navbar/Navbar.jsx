import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { ShopContext } from "../../App";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { sideBar, setSideBar, setSideBarValue, showBar, setShowBar } =
    useContext(ShopContext);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color === true
          ? "white-nav fixed z-50 w-[100%] text-black bg-white h-[70px] flex items-center justify-between px-[40px]"
          : "fixed z-50 w-[100%] text-white h-[70px] flex items-center justify-between px-[40px]"
      }
    >
      {/* Logo */}
      <div className="logo relative bg-white h-[24px] italic w-[120px]">
        <h1 className=" absolute text-black italic text-[30px] font-[700] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] trans">
          Hycade
        </h1>
      </div>

      {/* link section */}
      <div className="hidden md:block">
        <ul className=" flex gap-10">
          <li
            className="flex items-center gap-2 tracking-[2px] font-[500] cursor-pointer"
            onClick={() => {
              setShowBar("home");
              window.scrollTo(0, 0);
            }}
          >
            {showBar === "home" && (
              <hr className="w-[10px] h-[2px] bg-white"></hr>
            )}
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <p>home</p>
            </Link>
          </li>

          <li
            className="flex items-center gap-2 tracking-[2px] font-[500] cursor-pointer"
            onClick={() => {
              setShowBar("about");
              window.scrollTo(0, 0);
            }}
          >
            {showBar === "about" && (
              <hr className="w-[10px] h-[2px] bg-white"></hr>
            )}
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p>about</p>
            </Link>
          </li>

          <li className="product-link flex font-[500] items-center gap-2 text-[20px] cursor-pointer text-center relative">
            {showBar === "product" && (
              <hr className="w-[10px] h-[2px] bg-white"></hr>
            )}
            <p>products</p>
            <div>
              <IoIosArrowDown className="product-link-down-arrow" />
            </div>
            <div className="product-link-section">
              {/* product link */}
              <div
                className="product-link-item flex items-center gap-2"
                onClick={() => {
                  setShowBar("product");
                  window.scrollTo(0, 0);
                }}
              >
                <span className="link-item-yellow-bar h-[3px]  bg-yellow-400 w-[0px] duration-300 rounded-full"></span>
                <Link
                  to="/mens"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p className="font-[500] text-[17px] tracking-[2px]">men's</p>
                </Link>
              </div>

              {/* product link */}
              <div
                className="product-link-item flex items-center gap-2"
                onClick={() => {
                  setShowBar("product");
                  window.scrollTo(0, 0);
                }}
              >
                <span className="link-item-yellow-bar h-[3px]  bg-yellow-400 w-[0px] duration-300 rounded-full"></span>
                <Link
                  to="/womens"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p className="font-[500] text-[17px] tracking-[2px]">
                    women's
                  </p>
                </Link>
              </div>

              {/* product link */}
              <div
                className="product-link-item flex items-center gap-2"
                onClick={() => {
                  setShowBar("product");
                  window.scrollTo(0, 0);
                }}
              >
                <span className="link-item-yellow-bar h-[3px]  bg-yellow-400 w-[0px] duration-300 rounded-full"></span>
                <Link
                  to="/kids"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p className="font-[500] text-[17px] tracking-[2px]">kid's</p>
                </Link>
              </div>
            </div>
          </li>

          {showBar === "home" || showBar === "blog" ? (
            <li
              className="flex items-center gap-2 tracking-[2px] font-[500] cursor-pointer"
              onClick={() => {
                setShowBar("blog");
                window.scrollTo(0, 0);
              }}
            >
              {showBar === "blog" && (
                <hr className="w-[10px] h-[2px] bg-white"></hr>
              )}

              <a
                href="#blog"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>blog</p>
              </a>
            </li>
          ) : (
            <></>
          )}

          <li
            className="flex items-center gap-2 tracking-[2px] font-[500] cursor-pointer"
            onClick={() => {
              setShowBar("contact");
              window.scrollTo(0, 0);
            }}
          >
            {showBar === "contact" && (
              <hr className="w-[10px] h-[2px] bg-white"></hr>
            )}

            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p>contact</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* button section */}
      <div className="flex gap-6 items-center">
        <button
          className="border-2 border-white px-5 py-[3px] text-[14px] font-[700] tracking-[1px]"
          style={{ borderColor: color === true ? "black" : "white" }}
          onClick={() => {
            setSideBarValue("login");
            setSideBar(!sideBar);
          }}
        >
          login
        </button>
        <button
          className="text-white text-[20px]"
          onClick={() => {
            setSideBarValue("contact info");
            setSideBar(!sideBar);
          }}
          style={{ color: color === true ? "black" : "white" }}
        >
          {sideBar ? (
            <FaTimes style={{ color: sideBar === true ? "black" : "white" }} />
          ) : (
            <FaBars />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
