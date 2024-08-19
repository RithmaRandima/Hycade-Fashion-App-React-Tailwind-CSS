import React from "react";
import AboutUsBottomBox from "./AboutUsBottomBox/AboutUsBottomBox";
import img1 from "../../assets/lookbook-1.jpg";
import img2 from "../../assets/paralex-shop-left.jpg";
import img3 from "../../assets/new-items-2.jpg";

const AboutUsBottomSection = () => {
  return (
    <div className="flex flex-col  mt-[-100px] pb-[10px]">
      <div className="w-[90%] mx-auto h-[200px] py-[20px] px-[40px] box-border grid grid-cols-3 gap-5">
        <AboutUsBottomBox img={img1} />
        <AboutUsBottomBox img={img2} />
        <AboutUsBottomBox img={img3} />
      </div>
      <div className="w-[100%] h-[100%] mt-[300px] flex flex-col items-center justify-center text-center mb-[100px]">
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
