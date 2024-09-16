import React from "react";
import bgImg from "../../assets/Parallax-Background.jpg";
import Item from "../Item/Item";
import { Background, Parallax } from "react-parallax";
import { itemsData } from "../../data/ItemData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PopularSection = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-[100%] h-[100%] flex flex-col bg-cover">
      <Parallax strength={500} className="w-[100%] h-[100%] text-center pb-12">
        <Background className="custom-bg w-[100vw] h-[280vh] md:h-[200vh] overflow-hidden">
          <img
            src={bgImg}
            alt="fill murray"
            className="w-[100%] h-[100%] object-cover"
          />
        </Background>
        {/* top text */}
        <div className="text-center w-[80%] md:w-[50%] mx-auto m-[70px] md:mt-[70px] mt-[40px] flex items-center flex-col">
          <h1 className="text-[45px] font-[500] mb-4">popular items</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            veniam nostrum veritatis fuga corrupti consequuntur id corporis
            velit, eos mollitia?
          </p>
          <div className="w-[140px] bg-transparent h-[7px] flex mt-[20px]">
            <div className="w-[80px] bg-black h-[100%]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[20px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          </div>
        </div>

        {/* items section */}
        {/* desktop */}
        <div className="hidden w-[92%] mx-auto h-[100%] md:grid grid-cols-2 md:grid-cols-4  grid-rows-2 gap-[30px] pb-[40px]">
          {itemsData.map((item) => {
            if (item.popular === true) {
              return (
                <Item
                  img={item.img}
                  key={item.id}
                  price={item.price}
                  newItems={item.newItems}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* mobile */}
        <div className="md:hidden block w-[100%] mx-auto h-[100%] pb-[40px]">
          <Slider {...settings}>
            {itemsData.map((item) => {
              if (item.popular === true) {
                return (
                  <Item
                    img={item.img}
                    key={item.id}
                    price={item.price}
                    newItems={item.newItems}
                  />
                );
              } else {
                return null;
              }
            })}
          </Slider>
        </div>

        {/* button */}
        <button className="border-2 border-black px-7 py-2 font-[800] tracking-[2px] hover:text-white text-[13px] hover:bg-black text-center">
          show more
        </button>
      </Parallax>
    </div>
  );
};

export default PopularSection;
