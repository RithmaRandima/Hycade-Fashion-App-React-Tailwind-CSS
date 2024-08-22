import React from "react";
import AboutUsBottomBox from "./AboutUsBottomBox/AboutUsBottomBox";
import img1 from "../../assets/lookbook-1.jpg";
import img2 from "../../assets/paralex-shop-left.jpg";
import img3 from "../../assets/new-items-2.jpg";

const AboutUsBottomSection = () => {
  return (
    <div className="flex flex-col  md:mt-[-100px] pb-[10px]">
      {/* mobile section */}
      <div className="flex md:hidden w-[100%] h-[100%] mt-[20px] flex-col items-center justify-center text-center mb-[10px]">
        <h1 className="hero-bottom-text text-[55px] mb-[5px]">
          Highly Customizable
        </h1>
        <p className="hero-bottom-text-small text-[16px] w-[80%] md:w-[40%] tracking-[2px] mx-auto">
          Style your products and shop pages, add a cart widget to your header,
          and convert clicks into sales.
        </p>
      </div>

      {/* top section */}
      <div className="w-[100%] md:w-[90%] mx-auto  py-[20px] md:px-[40px] box-border grid grid-cols-3 md:gap-5">
        <AboutUsBottomBox img={img1} />
        <AboutUsBottomBox img={img2} />
        <AboutUsBottomBox img={img3} />
      </div>

      {/* bottom section */}
      <div className="hidden w-[100%] h-[100%] mt-[50px] md:flex flex-col items-center justify-center text-center mb-[120px]">
        <h1 className="hero-bottom-text text-[55px] mb-[5px]">
          Highly Customizable
        </h1>
        <p className="hero-bottom-text-small text-[16px] w-[40%] tracking-[2px] mx-auto">
          Style your products and shop pages, add a cart widget to your header,
          and convert clicks into sales.
        </p>
      </div>
    </div>
  );
};

export default AboutUsBottomSection;
