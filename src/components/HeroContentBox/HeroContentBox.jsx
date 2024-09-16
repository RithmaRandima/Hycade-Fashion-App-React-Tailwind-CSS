import React from "react";
import { Background, Parallax } from "react-parallax";
import "./HeroContentBox.css";
import { motion } from "framer-motion";

const HeroContentBox = (props) => {
  return (
    <div className="w-[100%] h-[80vh] md:h-[95vh] relative">
      {/* overlay */}
      <div className="absolute z-10 left-0 top-0 w-[100%] h-[100%] bg-gradient-to-t from-black/70 to-black/20"></div>
      <Parallax strength={200} className="w-[100%] h-[80vh] md:h-[100%]">
        <Background className="custom-bg w-[100vw] h-[80vh] md:h-[100%] overflow-hidden">
          <img
            src={props.img}
            alt="fill murray"
            className="hero-bg-image w-[100%] h-[100%] object-cover"
          />
        </Background>
        {/* information */}
        <div className="absolute z-20  w-[100%] h-[80vh] md:h-[95vh] flex flex-col justify-center items-center md:items-start text-white md:pl-[100px] pt-[50px]">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "none",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="tracking-[10px] text-[18px] font-[700] md:font-normal md:text-[22px] "
          >
            {props.subTitle}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "none",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
            className="tracking-[10px] md:tracking-[30px] text-[40px] md:text-[72px] font-[900] md:font-[500] text-center md:text-left md:w-[100%] w-[75%]"
          >
            {props.title}
          </motion.h1>
          {/* white line */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "none",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="w-[160px] bg-transparent h-[5px] flex "
          >
            <div className="w-[100px] bg-white h-[100%]"></div>
            <div className="flex-1 bg-white h-[100%] ml-[20px]"></div>
            <div className="flex-1 bg-white h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-white h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-white h-[100%] ml-[10px]"></div>
          </motion.div>
          {/* btn container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "none",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            className="flex items-center gap-10 mt-[40px]"
          >
            <button className="border-2  py-[8px] px-[30px] md:py-[10px] md:px-[50px] text-[15px] font-[500] tracking-[2px] ">
              shop men
            </button>
            <button className="border-2  py-[8px] px-[30px] md:py-[10px] md:px-[50px] text-[15px] font-[500] tracking-[2px] bg-white md:bg-transparent text-black md:text-white">
              shop women
            </button>
          </motion.div>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroContentBox;
