import React, { useContext } from "react";
import img1 from "../../assets/blog-1.jpeg";
import img2 from "../../assets/blog-3.jpeg";
import img3 from "../../assets/footer-bg.jpg";
import img4 from "../../assets/item-2.jpeg";
import img5 from "../../assets/lookbook-5.jpeg";
import img6 from "../../assets/new-items-2.jpeg";
import "./Sidebar.css";
import { ShopContext } from "../../App";
import {
  FaFacebook,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoIosArrowBack } from "react-icons/io";

const Sidebar = () => {
  const { sideBar, sideBarValue } = useContext(ShopContext);

  return (
    <div
      className={
        sideBar
          ? "fixed z-30 h-[100vh] w-[410px] bg-white right-0 top-0 flex flex-col items-center pt-[70px] gap-7 px-10 duration-300"
          : "fixed z-30 h-[100vh] w-[410px] bg-white right-[-410px] top-0 flex flex-col items-center pt-[70px] gap-7 px-10 duration-300"
      }
    >
      {/* logo */}
      <div className="logo relative bg-black h-[44px] italic w-[200px]">
        <h1 className=" absolute text-white italic text-[50px] font-[700] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] trans">
          Hycade
        </h1>
      </div>
      {/* contact info */}
      {sideBarValue === "contact info" && (
        <div className="w-[100%] ">
          {/* contact Info section */}
          <div className="hidden md:block">
            {/* grid section */}
            <div className="w-[90%] h-[205px]  mx-auto  grid grid-cols-3 gap-2">
              <div className="w-[100%] h-[90px]">
                <img
                  src={img1}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              <div className="w-[100%] h-[90px]">
                <img
                  src={img2}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              <div className="w-[100%] h-[90px]">
                <img
                  src={img3}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              <div className="w-[100%] h-[90px]">
                <img
                  src={img4}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              <div className="w-[100%] h-[90px]">
                <img
                  src={img5}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              <div className="w-[100%] h-[90px]">
                <img
                  src={img6}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* details */}
            <div className="text-left w-[100%] mx-auto font-sans">
              <div className="my-3">
                <h1 className="font-bold text-[19px]">Email</h1>
                <p className="text-[14px]">hycade@fashion.com</p>
              </div>

              <div className="my-3">
                <h1 className="font-bold text-[19px]">Phone</h1>
                <p className="text-[14px] mb-2">Hycade shop + 1 473 483 384</p>
                <p className="text-[14px]"> Hycade cafe + 1 474 499 384</p>
              </div>

              <div className="my-2">
                <h1 className="font-bold text-[19px]">Follow Us</h1>
                <div className="flex justify-between items-center mt-3 w-[50%]">
                  <FaFacebook className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
                  <FaTwitter className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
                  <FaLinkedin className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
                  <FaInstagram className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[280px]">
            <ul className="w-[100%] h-[100%] flex flex-col  items-center justify-between gap-1">
              <li className="w-[100%] h-[100%] flex items-center justify-center text-[17px] font-[500] hover:text-yellow-400 cursor-pointer">
                Home
              </li>

              <li className="w-[100%] h-[100%] flex items-center justify-center text-[17px] font-[500] hover:text-yellow-400 cursor-pointer">
                About
              </li>
              <li className="product-link w-[100%] h-[100%] flex gap-[10px] items-center justify-center text-[20px] font-[500] hover:text-yellow-400 cursor-pointer relative">
                <div>
                  <IoIosArrowBack className="product-link-left-arrow" />
                </div>
                <p>Products</p>

                <div className="product-link-section">
                  {/* product link */}
                  <div className="product-link-item flex items-center gap-2">
                    <span className="link-item-yellow-bar h-[3px]  bg-yellow-400 w-[0px] duration-300 rounded-full"></span>
                    <p className="font-[500] text-[17px] tracking-[2px]">
                      men's
                    </p>
                  </div>

                  {/* product link */}
                  <div className="product-link-item flex items-center gap-2">
                    <span className="link-item-yellow-bar h-[3px]  bg-yellow-400 w-[0px] duration-300 rounded-full"></span>
                    <p className="font-[500] text-[17px] tracking-[2px]">
                      women's
                    </p>
                  </div>

                  {/* product link */}
                  <div className="product-link-item flex items-center gap-2">
                    <span className="link-item-yellow-bar h-[3px]  bg-yellow-400 w-[0px] duration-300 rounded-full"></span>
                    <p className="font-[500] text-[17px] tracking-[2px]">
                      kid's
                    </p>
                  </div>
                </div>
              </li>
              <li className="w-[100%] h-[100%] flex items-center justify-center text-[17px] font-[500] hover:text-yellow-400 cursor-pointer">
                Pricing
              </li>
              <li className="w-[100%] h-[100%] flex items-center justify-center text-[17px] font-[500] hover:text-yellow-400 cursor-pointer">
                Blog
              </li>
            </ul>
            <div className="text-left w-[100%] mx-auto font-sans">
              <div className="my-3">
                <h1 className="font-bold text-[19px]">Phone</h1>
                <p className="text-[14px] mb-2">Hycade shop + 1 473 483 384</p>
                <p className="text-[14px]"> Hycade cafe + 1 474 499 384</p>
              </div>

              <div className="my-2">
                <h1 className="font-bold text-[19px]">Follow Us</h1>
                <div className="flex justify-between items-center mt-3 w-[50%]">
                  <FaFacebook className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
                  <FaTwitter className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
                  <FaLinkedin className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
                  <FaInstagram className="text-[20px] text-[#000] hover:scale-110 cursor-pointer duration-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* login */}
      {sideBarValue === "login" && (
        <div className="w-[100%] h-[440px] flex flex-col gap-[20px] items-center justify-center">
          {/* input box */}
          <div className="w-[100%]">
            <input
              type="email"
              placeholder="Email"
              className="w-[100%] outline-none border-2 border-black py-2 px-3"
            />
          </div>

          {/* input box */}
          <div className="w-[100%]">
            <input
              type="password"
              placeholder="Password"
              className="w-[100%] outline-none border-2 border-black py-2 px-3"
            />
            <div className="flex items-center justify-end mt-3 mr-4 gap-2">
              <input type="checkbox" />
              <label className="text-[12px] font-[700] tracking-[1px]">
                show password
              </label>
            </div>
          </div>

          <button className="w-[100%] py-3 bg-black text-white font-[700] tracking-[2px] hover:scale-90  duration-300">
            login
          </button>

          <p className="text-[14px] tracking-[1px] font-[500]">
            forget{" "}
            <span className="text-red-600 cursor-pointer">password?</span>
          </p>

          <p className="text-[14px] mt-[-10px] tracking-[1px] font-[500]">
            Don't have an account?{" "}
            <span className="text-red-600 cursor-pointer">sign up</span>
          </p>

          <div className="flex items-center gap-4 text-[17px] mt-4">
            <FaFacebookF className="hover:scale-125 duration-200 hover:text-red-600" />
            <FaInstagram className="hover:scale-125 duration-200 hover:text-red-600" />
            <FaTwitter className="hover:scale-125 duration-200 hover:text-red-600" />
            <LiaLinkedinIn className="hover:scale-125 duration-200 hover:text-red-600" />
            <FaGooglePlusG className="hover:scale-125 duration-200 hover:text-red-600" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
