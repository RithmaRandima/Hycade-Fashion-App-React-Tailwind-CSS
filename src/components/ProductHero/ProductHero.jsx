import React from "react";
import img from "../../assets/blog-1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../../assets/blog-1.jpg";
import img2 from "../../assets/blog-4.jpg";
import img3 from "../../assets/blog-5.jpg";

import img4 from "../../assets/blog-2.jpg";
import img5 from "../../assets/blog-6.jpg";
import img6 from "../../assets/hero-bg-3.webp";
import img7 from "../../assets/staff-4.jpg";
import Item from "../Item/Item";
import { Background, Parallax } from "react-parallax";

const imgContainerImg1 = [img1, img2, img3];
const imgContainerImg2 = [img4, img5, img6, img7];

const ProductHero = (props) => {
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
    // <div className="z-20 w-[100%] bg-red-40 h-[100%] flex flex-col items-center pt-[50px]">
    //   {/* Logo */}
    //   <h1 className=" text-black italic text-[65px] font-[900] ">Hycade</h1>

    //   {/* hero section */}

    //   {/* img container */}
    //   <div className="relative w-[80%] h-[170px] mt-[25px]">
    //     <img
    //       src={img}
    //       // src={props.img}
    //       alt=""
    //       className="w-[100%] h-[100%] object-cover"
    //     />
    //     {/* overlay */}
    //     <div className="absolute w-[100%] h-[100%] z-[1] bg-gradient-to-r to-black from-black/30 right-[0px] top-[0] ">
    //       <h1 className="absolute right-[150px] text-[70px] tracking-[2px] italic font-[900] text-white">
    //         Rithma {props.productType}
    //       </h1>
    //       <div className="absolute top-[10px] left-[20px]">
    //         <p className="text-[45px] font-[500] text-yellow-400">
    //           FLAT 50% OFF{props.discount}
    //         </p>
    //         <p className="text-[12px] font-[700] text-white tracking-[2px]">
    //           12 Hours 20 Mins{props.discountTime}
    //         </p>
    //         <button className="border-2 border-white text-[12px] tracking-[2px] mt-[14px] text-white font-[900] px-4 py-1">
    //           shop now
    //         </button>
    //       </div>
    //     </div>

    //     <div className="absolute w-[240px] h-[160px] z-[4] overflow-hidden right-[20px] top-[60%] ">
    //       <Slider {...settings}>
    //         {imgContainerImg1.map((img) => {
    //           return (
    //             <img
    //               src={img}
    //               className="w-[100%] h-[100%] object-cover"
    //               alt=""
    //             />
    //           );
    //         })}
    //       </Slider>
    //     </div>
    //     <div className="absolute w-[160px] h-[200px] z-[3] right-[-20px] top-[-40%] ">
    //       <Slider {...settings}>
    //         {imgContainerImg2.map((img) => {
    //           return (
    //             <img
    //               src={img}
    //               className="w-[100%] h-[200px] object-cover"
    //               alt=""
    //             />
    //           );
    //         })}
    //       </Slider>
    //     </div>
    //   </div>

    //   {/* product container */}
    //   <div className="w-[95%] py-[20px] overflow-hidden bg-black mt-[25vh]  grid grid-cols-4 gap-5">
    //     <Item />
    //     <Item />
    //     <Item />
    //     <Item />
    //     <Item />
    //     <Item />
    //     <Item />
    //     <Item />
    //     <Item />
    //   </div>
    // </div>

    <div className="w-[100%] h-[55vh] relative mb-[30px]">
      <Parallax strength={200} className="w-[100%] h-[100%] relative">
        <Background className="custom-bg w-[100vw] h-[100%] ">
          <img
            src={img1}
            alt="fill murray"
            className=" w-[100%] h-[100%] object-cover"
          />
        </Background>
        <div className="absolute z-10 w-[100%] h-[55vh] bg-gradient-to-l from-black to-black/50 flex  flex-col justify-center items-center">
          <h1 className="absolute right-[50px] text-[70px] tracking-[2px] italic font-[900] text-white">
            Rithma {props.productType}
          </h1>
          <div className="absolute top-[50%] translate-y-[-50%] left-[530px]">
            <p className="text-[46px] font-[500] text-yellow-400">
              FLAT 50% OFF{props.discount}
            </p>
            <p className="text-[12px] my-[5px] font-[700] text-white tracking-[2px]">
              12 Hours 20 Mins{props.discountTime}
            </p>
            <button className="border-2  border-white hover:border-yellow-400 text-[12px] tracking-[2px] mt-[14px] text-white font-[900] px-4 py-1  hover:bg-yellow-400 cursor-pointer hover:text-black">
              shop now
            </button>
          </div>
          {/* overlay text */}
          <div className="absolute bottom-0 bg-white w-fit right-0 text-[15px] font-[700] px-8 py-1 tracking-[3px]">
            fresh and fashionable item with <span>Hycade</span>
          </div>
        </div>
      </Parallax>
      <div className="absolute w-[340px] h-[200px] bg-black overflow-hidden  top-[190px] left-[20px] z-20">
        <Slider {...settings}>
          {imgContainerImg1.map((img) => (
            <img
              src={img}
              alt=""
              className="h-[200px] w-[100%] object-cover hover:scale-105 duration-300"
            />
          ))}
        </Slider>
      </div>

      <div className="absolute w-[160px] h-[160px]  top-[220px] left-[320px] z-20 overflow-hidden border-[10px] border-white">
        <Slider {...settings}>
          {imgContainerImg2.map((img) => (
            <img
              src={img}
              alt=""
              className="h-[160px] w-[100%] object-cover hover:scale-105 duration-300"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductHero;
