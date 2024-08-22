import React from "react";
import "./AboutProgressSection.css";
import bgImg from "../../assets/Box-Outline.jpg";

const AboutProgressSection = () => {
  return (
    <div
      className="about-progress-section w-[90%] mx-auto h-[100%] md:h-[70vh] px-3 py-4 "
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="w-[100%] h-[100%] bg-white grid md:grid-cols-2">
        <div className="w-[100%] h-[100%] bg-[#f0f0f0] flex items-center">
          {/* info section */}
          <div className="flex flex-col items-center md:items-end md:pr-[60px]">
            <h1 className="text-[50px] font-[500] mb-[10px] mt-[10px] md:mt-[0px] md:mb-[20px]">
              for the occasion
            </h1>
            <p className="md:text-right text-center w-[80%] md:w-[60%] my-[10px] md:my-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus molestiae quas optio consectetur earum fugit, dolorum
              quos repellendus rerum sequi quia!
            </p>
            <div className="about-bottom-btn relative md:mt-[23px] mt-[10px] text-[16px] tracking-[1px] font-[700] pb-[10px] md:mb-[20px]  mb-[30px] ">
              <p className="cursor-pointer">see more</p>
              <div className="about-btn-bottom-bar absolute bottom-0 left-0 bg-black w-[30px] h-[3px] duration-300"></div>
            </div>
          </div>
        </div>

        {/* bar section */}
        <div className="w-[100%]  h-[100%] flex items-center pr-[60px] md:mt-[1px] mt-[20px]">
          <div className="flex flex-col gap-[30px] pl-[60px] w-[100%]">
            {/* bar box */}
            <div>
              <h1 className="text-[18px] font-[200] tracking-[1px] mb-[10px]">
                denim
              </h1>
              {/* progress bar */}
              <div className="progress-bar progress-bar-1 w-[100%] bg-[#dfdfdf] h-[6px] relative"></div>
            </div>

            {/* bar box */}
            <div>
              <h1 className="text-[18px] font-[200] tracking-[1px] mb-[10px]">
                polyamide
              </h1>
              {/* progress bar */}
              <div className="progress-bar progress-bar-2 w-[100%] bg-[#dfdfdf] h-[6px] relative"></div>
            </div>

            {/* bar box */}
            <div>
              <h1 className="text-[18px] font-[200] tracking-[1px] mb-[10px]">
                flyknit
              </h1>
              {/* progress bar */}
              <div className="progress-bar progress-bar-3 w-[100%] bg-[#dfdfdf] h-[6px] relative"></div>
            </div>

            {/* bar box */}
            <div>
              <h1 className="text-[18px] font-[200] tracking-[1px] mb-[10px]">
                polymer
              </h1>
              {/* progress bar */}
              <div className="progress-bar progress-bar-4 w-[100%] bg-[#dfdfdf] h-[6px] relative"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProgressSection;
