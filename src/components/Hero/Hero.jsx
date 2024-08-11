import React from "react";
import HeroContentBox from "../HeroContentBox/HeroContentBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../../assets/hero-bg-1.webp";
import img2 from "../../assets/hero-bg-2.webp";
import img3 from "../../assets/hero-bg-3.webp";
import img4 from "../../assets/hero-bg-4.jpg";
import img5 from "../../assets/hero-bg-5.jpg";
import { heroContentData } from "../../data/HeroContentData";
import Navbar from "../Navbar/Navbar";
import { FaCartPlus } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

const Hero = () => {
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
    <div className="w-[100%] h-[95vh] relative">
      <Navbar />
      <Slider {...settings}>
        {heroContentData.map((data) => {
          return (
            <HeroContentBox
              key={data.id}
              img={data.img}
              title={data.title}
              subTitle={data.subTitle}
            />
          );
        })}
      </Slider>
      <div className="absolute bottom-[30px] left-[0px] font-[900] w-[60px] h-[35px] bg-white text-black flex items-center justify-center text-[20px] hover:bg-black hover:text-white cursor-pointer">
        <FaCartPlus />
      </div>
    </div>
  );
};

export default Hero;
