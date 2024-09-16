import React from "react";
import bgImg from "../../assets/shop-Newsletter-Background.jpeg";
import img1 from "../../assets/shop-newsletter-img-1.png";
import img2 from "../../assets/shop-newsletter-img-2.png";
import img3 from "../../assets/shop-newsletter-img-3.png";
import { Background, Parallax } from "react-parallax";

const ShopNewsLetter = () => {
  return (
    <div className=" w-[100%] h-[70vh] mb-[120px] relative ">
      <Parallax strength={200} className="w-[100%] h-[100%] ">
        <Background className="custom-bg w-[100vw] h-[80vh] md:h-[100%]">
          <img
            src={bgImg}
            alt="fill murray"
            className=" w-[100%] h-[100%] object-cover"
          />
        </Background>
      </Parallax>
      {/* content */}
      <div className="w-[100%] h-[100%] bg-black/60 absolute top-0 grid md:grid-cols-2">
        {/* left section */}
        <div className="mt-[-60px] md:mt-0 w-[100%] h-[100%]  flex items-center justify-center relative">
          <div className=" text-white flex flex-col items-center md:items-end ">
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

          <div className="absolute w-[280px] h-[280px] bottom-[-120px] md:bottom-[-80px] left-[10px] md:left-[70px]">
            <img src={img3} className="w-[100%] h-[100%] object-cover" alt="" />
          </div>
        </div>
        {/* right section */}
        <div className="hidden md:block w-[100%] h-[100%]   relative">
          <div className="absolute w-[400px] h-[400px] bottom-[-180px] z-30 left-[180px]">
            <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
          </div>

          <div className="absolute w-[220px] h-[220px] top-[20px] left-[70px]">
            <img src={img2} className="w-[100%] h-[100%] object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNewsLetter;
