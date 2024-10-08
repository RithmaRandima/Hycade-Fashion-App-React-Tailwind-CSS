import React from "react";
import BlogBox from "./BlogBox/BlogBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogTitleBox from "./BlogTitleBox/BlogTitleBox";

import img1 from "../../assets/blog-1.jpeg";
import img2 from "../../assets/blog-2.jpeg";
import img3 from "../../assets/blog-3.jpeg";
import img4 from "../../assets/blog-4.jpeg";
import img5 from "../../assets/blog-5.jpeg";
import img6 from "../../assets/blog-6.jpeg";
import img7 from "../../assets/blog-7.jpeg";

const Blog = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    vertical: true,
    verticalSwiping: true,
  };
  var settings2 = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="w-[100%] h-[100%] pb-8 pt-[00px] scroll-smooth" id="blog">
      {/* title text */}
      <div className="text-center w-[80%] md:w-[50%] mx-auto mb-[30px] m-[20px] flex items-center flex-col">
        <h1 className="text-[45px] font-[500] mb-4">blog</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          veniam nostrum veritatis fuga corrupti consequuntur id corporis velit,
          eos mollitia?
        </p>
        {/* bottom bar */}
        <div className="w-[140px] bg-transparent h-[7px] flex mt-[20px]">
          <div className="w-[80px] bg-black h-[100%]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[20px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
        </div>
      </div>

      {/* blog container */}
      <div className="w-[93%] h-[100%]  mx-auto gap-4 grid md:grid-cols-3">
        {/* col 01 */}
        <div className=" hidden md:block w-[100%] h-[455px]">
          <Slider {...settings}>
            <BlogBox height={140} img={img2} />
            <BlogBox height={170} img={img3} />
          </Slider>
          <BlogTitleBox height={120} title="modern" />
        </div>
        {/* col 02 */}
        <div className="w-[100%] h-[100%]">
          <BlogBox height={220} img={img1} />
          <BlogTitleBox
            height={230}
            title={"awesome wears take you to awesome places"}
            author="rithma randima"
          />
          <BlogBox height={190} img={img4} />
        </div>

        {/* col 03 */}
        <div className="w-[100%] h-[430px]">
          <Slider {...settings2}>
            <BlogBox height={180} img={img5} />
            <BlogBox height={230} img={img6} />
            <BlogBox height={200} img={img7} />
          </Slider>
          <BlogTitleBox height={120} title={"booze"} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
