import React from "react";
import { Background, Parallax } from "react-parallax";
import bgImg from "../../assets/Parallax-Background.jpg";
import img1 from "../../assets/hero-bg-3.webp";
import img2 from "../../assets/hero-bg-1.jpg";
import img3 from "../../assets/hero-bg-5.jpg";
import { motion } from "framer-motion";

const AboutParallaxShop = () => {
  return (
    <div className="w-[100%] h-[85vh] mt-[150px] flex items-center">
      {/* left side */}
      <div className="w-[60vw] h-[100vh] relative">
        <Parallax strength={200} className="w-[100%] h-[100vh]">
          <Background className="custom-bg w-[60vw] h-[100vh] overflow-hidden">
            <img
              src={bgImg}
              alt="fill murray"
              className="w-[100%] h-[100%] object-cover opacity-[0.5]"
            />
          </Background>

          {/* Right Side Small Image 01 */}
          <motion.div
            whileInView={{ y: [0, -130] }}
            transition={{
              duration: 3,
            }}
            className="w-[150px] h-[900px]  absolute left-[50px]
            top-[-100px]"
          >
            <img src={img2} className="w-[100%] h-[25%] object-cover " alt="" />
            <img src={img2} className="w-[100%] h-[25%] object-cover " alt="" />
            <img src={img2} className="w-[100%] h-[25%] object-cover " alt="" />
            <img src={img2} className="w-[100%] h-[25%] object-cover " alt="" />
          </motion.div>

          {/* Right Side Small Image 02 */}
          <motion.div
            whileInView={{ y: [-270, -130] }}
            transition={{
              duration: 3,
              delay: 0.1,
            }}
            className="w-[230px] h-[300px] absolute left-[280px]
            top-[410px]"
          >
            <img
              src={img3}
              className="w-[100%] h-[100%] object-cover "
              alt=""
            />
          </motion.div>

          {/* Right Side Small Image 03 */}
          <motion.div
            whileInView={{ y: [0, -130] }}
            transition={{
              duration: 3,
              delay: 0.2,
            }}
            className="w-[160px] h-[200px] bg-red-400 absolute right-[50px]
            top-[200px]"
          >
            <img
              src={img2}
              className="w-[100%] h-[100%] object-cover "
              alt=""
            />
          </motion.div>
        </Parallax>
      </div>

      {/* right side */}

      <div className="w-[40vw] h-[100%]">
        <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
      </div>
    </div>
  );
};

export default AboutParallaxShop;
