import React from "react";

const Placeholdertext = () => {
  return (
    <div className="flex  w-[100%] h-[50vh] md:h-[60vh] md:my-[30px] flex-col justify-center items-center  mx-auto text-center relative">
      <div className="z-20 absolute w-[90%] md:w-[60%] -rotate-[15deg] md:rotate-0">
        <h1 className="placeholder-text text-[80px] md:text-[120px] leading-[100px] font-extrabold">
          The Theme You Trust In
        </h1>
        <p className="hidden md:block placeholder-text-small text-[18px] md:text-[22px] md:mt-[30px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi
          dolorem animi minima aperiam, sint labore fuga, ut, incidunt quod
          placeat voluptatem voluptates iste iusto nam aspernatur eum quam
          asperiores?
        </p>
      </div>
    </div>
  );
};

export default Placeholdertext;
