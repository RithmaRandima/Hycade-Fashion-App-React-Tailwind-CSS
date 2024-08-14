import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { ShopContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { sideBar, setSideBar } = useContext(ShopContext);
  const [showBar, setShowBar] = useState("home");
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

      <div>
        <ul className=" flex gap-8">
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

          <li className="text-[24px] cursor-pointer">
            <p>pages</p>
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
            onClick={() => setShowBar("contact")}
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
      {/* button */}

      <div>
        <button>login</button>
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
    </div>
  );
};

export default Navbar;
