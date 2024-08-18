import React from "react";
import { Background, Parallax } from "react-parallax";
// import bgImg from "../../assets/pexels-scottwebb-2117938.jpg";
import parallaxLeft from "../../assets/paralex-shop-left.jpg";
import parallaxRight from "../../assets/paralex-shop-right.jpg";
import img2 from "../../assets/pngwing.com (7).png";
import img3 from "../../assets/pngwing.com (9).png";
import img4 from "../../assets/pngwing.com (10).png";
import { motion } from "framer-motion";

const ParallaxShop = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-blak flex">
      {/* left side */}
      <div className="w-[40vw] h-[100%]">
        <img
          src={parallaxLeft}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      {/* right side */}
      <div className="w-[60vw] h-[100vh] relative">
        <Parallax strength={200} className="w-[100%] h-[100vh]">
          <Background className="custom-bg w-[60vw] h-[100vh] overflow-hidden">
            <img
              src={parallaxRight}
              alt="fill murray"
              className="w-[100%] h-[100%] object-cover"
            />
          </Background>

          {/* Right Side Small Image 01 */}
          <motion.div
            whileInView={{ y: [0, -130] }}
            transition={{
              duration: 3,
            }}
            className="w-[300px] h-[300px]  b-black absolute left-[50px]
            top-[150px]"
          >
            <img
              src={img2}
              className="w-[100%] h-[100%] object-contain "
              alt=""
            />
          </motion.div>

          {/* Right Side Small Image 02 */}
          <motion.div
            whileInView={{ x: [0, 40] }}
            transition={{
              duration: 3,
              delay: 0.2,
            }}
            className="w-[280px] h-[280px] bghite absolute left-[-30px]
            top-[340px]"
          >
            <img
              src={img4}
              className="w-[100%] h-[100%] object-contain "
              alt=""
            />
          </motion.div>

          {/* Right Side big Image  */}
          <motion.div
            whileInView={{ y: [-270, -130] }}
            transition={{
              duration: 3,
              delay: 0.1,
            }}
            className="w-[500px] h-[500px] bggreen-400 absolute left-[270px]
            top-[240px]"
          >
            <img
              src={img3}
              className="w-[100%] h-[100%] object-contain "
              alt=""
            />
          </motion.div>
        </Parallax>
      </div>
    </div>
  );
};

export default ParallaxShop;
