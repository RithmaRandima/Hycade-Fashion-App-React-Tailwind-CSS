import React from "react";
import { Background, Parallax } from "react-parallax";
import img1 from "../../assets/lookbook-1.jpg";
import img2 from "../../assets/lookbook-5.jpg";
import img3 from "../../assets/lookbook-2.jpg";
import img5 from "../../assets/new-items-3.jpg";
import img6 from "../../assets/lookbook-4.jpg";
import img7 from "../../assets/lookbook-6.jpg";
import { motion } from "framer-motion";
import Slider from "react-slick";

const imgs = [img1, img2, img3, img5, img6, img7];

const AboutParallaxShop = () => {
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

  var settings2 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    cssEase: "linear",
    lazyLoad: true,
    waitForAnimate: false,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="w-[100%] h-[85vh] mt-[150px] flex items-center">
      {/* left side */}
      <div className="w-[60vw] h-[100vh] relative">
        <Parallax strength={200} className="w-[100%] h-[100vh]">
          <Background className="custom-bg w-[60vw] h-[100vh] overflow-hidden">
            <Slider {...settings}>
              {imgs.map((img) => {
                return (
                  <img
                    src={img}
                    alt="fill murray"
                    className="w-[100%] h-[100vh] object-cover"
                  />
                );
              })}
            </Slider>
          </Background>
          {/* left Side white box */}
          <div
            className="w-[60px] h-[40px] bg-white  absolute left-[50px]
            -top-[30px]"
          ></div>

          {/* left Side white box */}
          <div
            className="w-[40px] h-[40px] bg-white  absolute left-[10px]
            top-[10px]"
          ></div>

          {/* left Side white box */}
          <div
            className="w-[50px] h-[50px] bg-white  absolute left-[30px]
            top-[70px]"
          ></div>

          {/* left Side white box */}
          <div
            className="w-[80px] h-[80px] bg-white  absolute left-[20px]
            top-[140px]"
          ></div>

          {/* left Side white box */}
          <div
            className="w-[40px] h-[40px] bg-white  absolute left-[70px]
            top-[20px]"
          ></div>

          {/* left Side white box */}
          <div
            className="w-[40px] h-[40px] bg-white  absolute left-[100px]
            top-[100px]"
          ></div>

          {/* left Side white box */}
          <div
            className="w-[40px] h-[40px] bg-white  absolute left-[-20px]
            top-[220px]"
          ></div>

          {/* left Side white box */}
          <div
            className="w-[50px] h-[50px] bg-white  absolute left-[40px]
            top-[250px]"
          ></div>

          {/* left Side white box */}
          <div
            className="w-[70px] h-[70px] bg-white  absolute left-[110px]
            top-[200px]"
          ></div>

          {/* left Side white box */}
          <div
            className="w-[80px] h-[80px] bg-white  absolute left-[10px]
            top-[320px]"
          ></div>

          {/* left Side white box */}
          <div
            className="w-[40px] h-[40px] bg-white  absolute left-[120px]
            top-[300px]"
          ></div>

          <div
            className="w-[20px] h-[20px] bg-white  absolute left-[170px]
            top-[340px]"
          ></div>

          {/* left Side Image */}
          <div
            className="w-[250px] h-[250px] p-8  overflow-hidden bg-white absolute z-20 left-[0px]
            top-[350px]"
          >
            <Slider {...settings2}>
              {imgs.map((img) => {
                return (
                  <img
                    src={img}
                    alt="fill murray"
                    className="w-[100%] h-[210px] object-cover"
                  />
                );
              })}
            </Slider>
          </div>
        </Parallax>
      </div>

      {/* right side */}
      <div className="w-[40vw] h-[100%] flex items-center justify-center py-10">
        <div className="w-[90%] h-[100%]">
          <h1 className="font-[800] lowercase text-[33px]">
            The Company You Trust In
          </h1>

          {/* bottom bar */}
          <div className="w-[120px] bg-transparent h-[7px] flex mt-[5px] mb-5">
            <div className="w-[60px] bg-black h-[100%]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[20px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          </div>
          <p className="font-[300] my-3 text-[16px] tracking-[1px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            deserunt tempore exercitationem doloremque officia perferendis
            labore! Totam aliquid repudiandae perspiciatis. Quibusdam fugit,
            accusamus ut iure maxime quo porro deleniti suscipit.
          </p>

          <p className="font-[300] my-3 text-[16px] tracking-[1px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            deserunt ab quo esse neque nihil ipsum ipsam eius reiciendis quas?
          </p>

          <ul className="list-disc ml-6">
            <li className="hover:text-yellow-400 cursor-pointer">
              Cotton blend
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Straight fit
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">Dry clean</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Tempora labore
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutParallaxShop;
