import React from "react";
import { Background, Parallax } from "react-parallax";
import img1 from "../../assets/hero-bg-4.jpg";
import img2 from "../../assets/hero-bg-2.webp";
import img3 from "../../assets/hero-bg-3.webp";
import img4 from "../../assets/hero-bg-4.jpg";
import img5 from "../../assets/hero-bg-1.webp";

import Slider from "react-slick";

const ContactUsHero = () => {
  const imgList = [img1, img2, img3, img4];
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: "linear",
    lazyLoad: true,
    waitForAnimate: false,
  };

  return (
    <div className="w-[100%] h-[60vh] relative mb-[100px]">
      <Parallax strength={200} className="w-[100%] h-[100%] relative">
        <Background className="custom-bg w-[100vw] h-[100%] ">
          <img
            src={img1}
            alt="fill murray"
            className=" w-[100%] h-[100%] object-cover"
          />
        </Background>
        <div className="absolute z-10 w-[100%] h-[60vh] bg-gradient-to-t from-black/80 to-black/10 flex  flex-col justify-center items-center">
          <h1 className="text-[#fff] text-[70px]">contact us</h1>
          <p className="w-[60%] text-center text-[15px] mt-3 tracking-[2px] text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            quasi perspiciatis maxime? Id fugiat consequuntur ad fuga animi enim
            debitis laborum, laudantium assumenda quia. Sunt.
          </p>
        </div>
      </Parallax>
      <div className="absolute w-[340px] h-[220px] bg-black  top-[270px] left-[20px] z-20">
        <Slider {...settings}>
          {imgList.map((img) => (
            <img
              src={img}
              alt=""
              className="h-[220px] w-[100%] object-cover hover:scale-105 duration-300"
            />
          ))}
        </Slider>
      </div>

      <div className="absolute w-[160px] h-[160px]  top-[370px] left-[300px] z-20 overflow-hidden border-[10px] border-white">
        <img src={img5} className="w-[100%] h-[100%] object-cover" alt="" />
      </div>
    </div>
  );
};

export default ContactUsHero;
