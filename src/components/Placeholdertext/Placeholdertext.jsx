import React from "react";
import img1 from "../../assets/placeholder-img.jpg";

const Placeholdertext = () => {
  return (
    <div className="text-[#eaeaea] w-[100%] h-[90vh] my-[30px] flex flex-col justify-center items-center  mx-auto text-center relative">
      <div className="z-20 absolute w-[60%] -rotate-[15deg]">
        <h1 className="placeholder-text text-[120px] leading-[100px] font-extrabold">
          The Theme You Trust In
        </h1>
        <p className="placeholder-text-small text-[22px] mt-[30px] text-[#b6b6b6]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi
          dolorem animi minima aperiam, sint labore fuga, ut, incidunt quod
          placeat voluptatem voluptates iste iusto nam aspernatur eum quam
          asperiores?
        </p>
      </div>

      <div className="z-10 top-[30px] left-[30px]  absolute w-[350px] h-[450px] bg-[#ececec]/80"></div>
      <div className="z-10 top-[40px] left-[40px]  absolute w-[340px] h-[440px] bg-white shadow-sm shadow-black"></div>
      <div className="z-10 top-[50px] left-[50px]  absolute w-[300px] h-[400px]  bg-[#ececec]"></div>
      <div className="z-10 top-[60px] left-[60px]  absolute w-[450px] h-[390px] bg-white shadow-sm shadow-black/50">
        <img
          src={img1}
          className="w-[100%] h-[100%] overflow-hidden object-cover opacity-95"
          alt=""
        />
      </div>
    </div>
  );
};

export default Placeholdertext;
