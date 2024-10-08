import React from "react";
import { Background, Parallax } from "react-parallax";
// import bgImg from "../../assets/pexels-scottwebb-2117938.jpg";
import parallaxLeft from "../../assets/paralex-shop-left.jpeg";
import parallaxRight from "../../assets/paralex-shop-right.jpeg";
import img1 from "../../assets/parallax-img-1.png";
import img2 from "../../assets/parallax-img-2.png";
import img3 from "../../assets/parallax-img-3.png";
import { motion } from "framer-motion";

const ParallaxShop = () => {
  return (
    <div className="w-[100%] h-[70vh] md:h-[100vh] flex flex-row">
      {/* left side */}
      <div className="hidden md:block w-[40vw] h-[100%]">
        <img
          src={parallaxLeft}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      {/* right side */}
      <div className="w-[100%] md:w-[60vw] h-[100vh] relative">
        <Parallax strength={200} className="w-[100%] h-[100vh]">
          <Background className="custom-bg w-[100vw]  md:w-[60vw] h-[100vh] overflow-hidden">
            <img
              src={parallaxRight}
              alt="fill murray"
              className="w-[100%] h-[100%] object-cover"
            />
          </Background>

          {/* Right Side Small Image 01 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [0, -130], opacity: 1 }}
            transition={{
              duration: 1.5,
            }}
            className="w-[230px] h-[230px] md:w-[300px] md:h-[300px]  b-black absolute md:left-[50px] left-[150px]
            top-[150px]"
          >
            <img
              src={img1}
              className="w-[100%] h-[100%] object-contain "
              alt=""
            />

            {/* price tag section*/}
            <div className="absolute right-[-50px] top-[0px] text-center cursor-pointer">
              <p className="text-[25px] font-[900] text-white tracking-[2px]  hover:text-yellow-400">
                cool items
              </p>
              <p className="bg-black text-white border-2 border-white w-fit px-2 text-[22px] font-[900] mx-auto  hover:text-yellow-400  hover:border-yellow-400">
                $20.00
              </p>
            </div>
          </motion.div>

          {/* Right Side Small Image 02 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [0, 40], opacity: 1 }}
            transition={{
              duration: 1.3,
              delay: 0.2,
            }}
            className="w-[190px] h-[190px] md:w-[260px] md:h-[260px]  absolute md:left-[-30px]
            md:top-[340px] top-[160px] left-[-10px]"
          >
            <img
              src={img3}
              className="w-[100%] h-[100%] object-contain "
              alt=""
            />

            {/* price tag section*/}
            <div className="absolute left-[10px] top-[1px] text-center cursor-pointer">
              <p className="text-[20px] font-[900] text-white tracking-[2px]  hover:text-yellow-400">
                cool items
              </p>
              <p className="bg-black text-white border-2 border-white w-fit px-2 text-[18px] font-[900] mx-auto  hover:text-yellow-400  hover:border-yellow-400">
                $20.00
              </p>
            </div>
          </motion.div>

          {/* Right Side big Image  */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-270, -130], opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.1,
            }}
            className="w-[400px] h-[400px] md:w-[470px] md:h-[470px] absolute left-[80px] md:left-[280px]
            md:top-[260px] top-[380px]"
          >
            <img
              src={img2}
              className="w-[100%] h-[100%] object-contain "
              alt=""
            />
            {/* price tag section*/}
            <div className="absolute left-[70px] top-[100px] text-center cursor-pointer">
              <p className="text-[22px] font-[900] text-white tracking-[2px]  hover:text-yellow-400">
                cool items
              </p>
              <p className="bg-black text-white border-2 border-white w-fit px-2 text-[20px] font-[900] mx-auto  hover:text-yellow-400  hover:border-yellow-400">
                $20.00
              </p>
            </div>
          </motion.div>
        </Parallax>
      </div>
    </div>
  );
};

export default ParallaxShop;
