import React from "react";
import {
  FaClock,
  FaFacebook,
  FaMailBulk,
  FaRegClock,
  FaTwitter,
} from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { PiPinterestLogoFill } from "react-icons/pi";
const ContactForm = () => {
  return (
    <div className="about-progress-section w-[100%] h-[80vh] grid grid-cols-3 bg-white">
      <div className="w-[100%] h-[100%] flex items-center">
        {/* info section */}
        <div className="flex flex-col items-start pl-[30px]">
          <h1 className="text-[50px] font-[500] mb-[10px]">contact us</h1>
          <p className="text-left font-[200]  mb-[15px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            molestiae quas optio consectetur earum fugit.
          </p>
          <div className="w-[100px] bg-transparent h-[5px] flex mt-4 ">
            <div className="w-[40px] bg-black h-[100%]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[20px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          </div>
          <div className="mt-[40px]">
            <div className="flex items-center gap-[25px] mb-[20px]">
              <FaLocationDot size={23} />
              <p className="font-[200] tracking-[1px]">
                Via S. Raffaele, 6, 20121 Milano
              </p>
            </div>

            <div className="flex items-center gap-[25px] mb-[20px]">
              <FaRegClock size={23} />
              <p className="font-[200] tracking-[1px]">
                Monday to Friday: 9am to 8pm
              </p>
            </div>

            <div className="flex items-center gap-[25px] mb-[20px]">
              <FaMailBulk size={23} />
              <p className="font-[200] tracking-[1px]">
                hycade@qodeinteractive.com
              </p>
            </div>

            <div className="w-[100%] h-[40px] bottom-0 flex items-center justify-center text-black gap-[20px] text-[17px] ">
              <FaFacebook className="hover:text-yellow-500 hover:scale-110 duration-200" />
              <PiPinterestLogoFill className="hover:text-yellow-500 hover:scale-110 duration-200" />
              <FaInstagram className="hover:text-yellow-500 hover:scale-110 duration-200" />
              <FaLinkedinIn className="hover:text-yellow-500 hover:scale-110 duration-200" />
              <FaTwitter className="hover:text-yellow-500 hover:scale-110 duration-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div className="w-[100%]  col-span-2 h-[100%] flex items-center pr-[60px]">
        <div className="flex flex-col gap-[30px] pl-[70px]  w-[100%]">
          {/* input box */}
          <div className="w-[100%]">
            <input
              type="text"
              className="w-[100%] border-[2px] border-black/15 px-6 py-[12px] placeholder-black text-[16px]"
              placeholder="Full Name *"
            />
          </div>

          <div className="w-[100%]">
            <input
              type="email"
              className="w-[100%] border-[2px] border-black/15 px-6 py-[12px] placeholder-black text-[16px]"
              placeholder="Email Address *"
            />
          </div>

          <div className="w-[100%] ">
            <input
              type="text"
              className="w-[100%] border-[2px] border-black/15 px-6 py-[12px] placeholder-black text-[16px]"
              placeholder="Website "
            />
          </div>
          <div className="w-[100%]">
            <textarea
              rows={4}
              type="text"
              className="w-[100%] border-[2px] border-black/15 px-6 py-[12px] placeholder-black text-[16px]"
              placeholder="Write Comment..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
