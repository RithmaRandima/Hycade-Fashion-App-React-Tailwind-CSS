import React from "react";
import bgImg from "../../assets/8909.jpg";
import Slider from "react-slick";
import img1 from "../../assets/hero-bg-1.webp";
import img2 from "../../assets/hero-bg-2.webp";
import img3 from "../../assets/hero-bg-3.webp";
import img4 from "../../assets/hero-bg-4.jpg";
import { IoMdStar } from "react-icons/io";

const NewItemsSection = () => {
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
    <div className="w-[100%] h-[100vh] flex items-center justify-center bg-white my-[50px]">
      <div
        className="w-[90%] mx-auto h-[70vh] px-4 py-3"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
      >
        <div className="w-[100%] h-[100%] bg-white grid grid-cols-2">
          {/* left section */}
          <div className="w-[100%] h-[100%] pl-[30px] flex items-center justify-center relative">
            <div className="absolute h-[90vh] bg-red-300 w-[90%] shadow-sm shadow-black/60 overflow-hidden">
              <Slider {...settings}>
                {imgList.map((img) => (
                  <img
                    src={img}
                    alt=""
                    className="h-[90vh] w-[100%] object-cover hover:scale-105 duration-300"
                  />
                ))}
              </Slider>
            </div>
          </div>
          {/* right section */}
          <div className="px-[40px] box-border flex items-center ">
            <div className="">
              <p className="bg-black w-fit text-white px-2">
                <span className="line-through mr-1">130$</span> <span>79$</span>
              </p>
              <p className="text-[40px] tracking-[1px] font-[600] lowercase mt-3 mb-1">
                Bad Shirt
              </p>
              <div className="flex gap-2 text-[15px] mb-4">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
              <p className="w-[90%] tracking-[1px] text-[16px] text-black/70 font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                id, est adipisci placeat nam eligendi dolor quo ad ratione
                perspiciatis minima necessitatibus! Porro unde in consectetur
                laboriosam quia quos ullam?
              </p>
              <div className="about-bottom-btn relative mt-[23px] text-[16px] tracking-[1px] font-[700] pb-[10px]">
                <p className="cursor-pointer">see more</p>
                <div className="about-btn-bottom-bar absolute bottom-0 left-0 bg-black w-[30px] h-[3px] duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItemsSection;
