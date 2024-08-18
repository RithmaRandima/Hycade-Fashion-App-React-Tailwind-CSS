import React, { useContext } from "react";
import { Background, Parallax } from "react-parallax";
import img1 from "../../assets/hero-bg-3.webp";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { ShopContext } from "../../App";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { PiPinterestLogoFill } from "react-icons/pi";

const Footer = () => {
  const { showBar, setShowBar } = useContext(ShopContext);
  return (
    <div className="w-[100%] h-[50vh] ">
      {/* top */}
      <Parallax strength={200} className="w-[100%] h-[100%]">
        <Background className="custom-bg w-[100vw] h-[100%] overflow-hidden">
          <img
            src={img1}
            alt="fill murray"
            className="w-[100%] h-[100%] object-cover"
          />
        </Background>
        <div className="w-[100%] h-[40vh] flex flex-col items-center justify-center">
          <div className="flex items-center px-[60px] mt-[40px] mb-[10px] w-[100%]">
            <p className="text-[40px] text-white tracking-[2px] mr-[60px] font-[700]">
              subscribe
            </p>
            <div className="flex items-center w-[950%]">
              <input
                type="text"
                className="w-[100%] py-[13px] outline-none px-[30px] bg-transparent text-[17px] text-white border-2"
                placeholder="your email"
              />
              <p className="bg-white w-[200px] font-[700] tracking-[2px] h-[55px] flex items-center justify-center">
                subscribe
              </p>
            </div>
          </div>

          {/* footer link */}
          <div className=" w-[90%] mx-auto h-[30px] text-white mt-[30px] flex items-center justify-between">
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
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
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

                <li className="flex items-center gap-2 font-[500] cursor-pointer text-center relative">
                  {showBar === "product" && (
                    <hr className="w-[10px] h-[2px] bg-white"></hr>
                  )}
                  <p>products</p>
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

            {/* social overlay */}
            <div className="w-fit  h-[50px] flex items-center justify-center text-white gap-[24px] text-[22px] ">
              <FaFacebook className="hover:text-yellow-500 hover:scale-110 duration-200" />
              <PiPinterestLogoFill className="hover:text-yellow-500 hover:scale-110 duration-200" />
              <FaInstagram className="hover:text-yellow-500 hover:scale-110 duration-200" />
              <FaLinkedinIn className="hover:text-yellow-500 hover:scale-110 duration-200" />
              <FaTwitter className="hover:text-yellow-500 hover:scale-110 duration-200" />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-row justify-between w-[100%] h-[10vh] px-10 items-center py-4 gap-7  bg-[#000000] text-white">
          <p className="text-[10px] md:text-[8px] tracking-[4px]">
            © 2025
            <span className="text-[#000] text-[12px] mx-1 font-[900] italic bg-white ">
              Hycade
            </span>{" "}
            ALL RIGHTS RESERVED.
          </p>

          <div className="logo relative bg-white h-[24px] italic w-[120px]">
            <h1 className=" absolute text-black italic text-[30px] font-[700] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] trans">
              Hycade
            </h1>
          </div>

          <p className="hidden md:block text-[10px] font-bold tracking-[4px]">
            wear you want..!
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Footer;
