import React from "react";
import { Background, Parallax } from "react-parallax";
import img1 from "../../assets/hero-bg-4.jpg";

const AboutUs = () => {
  return (
    <div className="w-[100%] h-[55vh] relative">
      <Parallax strength={200} className="w-[100%] h-[100%] relative">
        <Background className="custom-bg w-[100vw] h-[100%] overflow-hidden">
          <img
            src={img1}
            alt="fill murray"
            className=" w-[100%] h-[100%] object-cover"
          />
        </Background>
        <div className="absolute z-10 w-[100%] h-[55vh] bg-gradient-to-t from-black/50 to-black/20 flex justify-center items-center">
          <h1 className="text-[#fff] text-[70px]">about us</h1>
        </div>
      </Parallax>
    </div>
  );
};

export default AboutUs;
