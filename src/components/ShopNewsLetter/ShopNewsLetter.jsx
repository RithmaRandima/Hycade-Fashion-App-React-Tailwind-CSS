import React from "react";
import bgImg from "../../assets/hero-bg-3.webp";
import img2 from "../../assets/kisspng-business-process-management-process-automation-5b4317cd986998.0488413515311236616243.png";
import { Background, Parallax } from "react-parallax";

const ShopNewsLetter = () => {
  return (
    <div className=" w-[100%] h-[70vh] mb-[150px] bg-red-300 relative ">
      <Parallax strength={200} className="w-[100%] h-[100%] ">
        <Background className="custom-bg w-[100vw] h-[100%]">
          <img
            src={bgImg}
            alt="fill murray"
            className=" w-[100%] h-[100%] object-cover"
          />
        </Background>
      </Parallax>
      {/* content */}
      <div className="w-[100%] h-[100%] bg-black/60 absolute top-0 grid grid-cols-2">
        {/* left section */}
        <div className="w-[100%] h-[100%]  flex items-center justify-center">
          <div className=" text-white flex flex-col items-end ">
            <p className="text-[38px] font-[700] ">
              black sneakers, so classy!
            </p>
            {/* bottom bar */}
            <div className="w-[80px] bg-transparent h-[5px] flex mt-[10px] mb-[30px] ">
              <div className="w-[40px] bg-white h-[100%]"></div>
              <div className="flex-1 bg-white h-[100%] ml-[10px]"></div>
              <div className="flex-1 bg-white h-[100%] ml-[5px]"></div>
              <div className="flex-1 bg-white h-[100%] ml-[5px]"></div>
              <div className="flex-1 bg-white h-[100%] ml-[5px]"></div>
            </div>

            <p className="w-[80%] text-right text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eligendi nostrum illum deleniti omnis nisi, rem voluptate non
              laboriosam? Aliquid nulla ?
            </p>

            {/* button */}

            <button className="border-2  py-[9px] px-[27px] mt-[30px] text-[14px] font-[700] tracking-[2px] hover:bg-white hover:text-black duration-200">
              pre-order
            </button>
          </div>
        </div>
        {/* right section */}
        <div className="w-[100%] h-[100%]  relative">
          <div className="absolute w-[450px] h-[450px] bottom-[-200px] left-[100px]">
            <img src={img2} className="w-[100%] h-[100%] object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNewsLetter;
