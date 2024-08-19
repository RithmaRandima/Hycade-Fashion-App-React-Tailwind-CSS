import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialBox from "./TestimonialBox/TestimonialBox";

const Testimonials = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="mt-[10px] w-[100%] h-[70vh] flex flex-col justify-center items-center">
      {/* testimonial container */}
      <h1 className="text-[40px] font-[500] mb-[10px]">Why They Like us</h1>
      <div className="w-[80%] mx-auto h-[45vh]">
        <Slider {...settings}>
          <TestimonialBox />
          <TestimonialBox />
          <TestimonialBox />
          <TestimonialBox />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
