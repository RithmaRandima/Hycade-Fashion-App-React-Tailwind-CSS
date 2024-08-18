import React from "react";
import bgImg from "../../assets/Parallax-Background.jpg";
import Item from "../Item/Item";
import { Background, Parallax } from "react-parallax";
import { itemsData } from "../../data/ItemData";

const PopularSection = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col bg-cover">
      <Parallax strength={500} className="w-[100%] h-[100%] text-center pb-12">
        <Background className="custom-bg w-[100vw] h-[200vh] overflow-hidden">
          <img
            src={bgImg}
            alt="fill murray"
            className="w-[100%] h-[100%] object-cover"
          />
        </Background>
        {/* top text */}
        <div className="text-center w-[50%] mx-auto m-[70px] flex items-center flex-col">
          <h1 className="text-[45px] font-[500] mb-4">popular items</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            veniam nostrum veritatis fuga corrupti consequuntur id corporis
            velit, eos mollitia?
          </p>
          <div className="w-[140px] bg-transparent h-[7px] flex mt-[20px]">
            <div className="w-[80px] bg-black h-[100%]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[20px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
            <div className="flex-1 bg-black h-[100%] ml-[10px]"></div>
          </div>
        </div>

        {/* items section */}
        <div className="w-[92%] mx-auto h-[100%] grid grid-cols-4  grid-rows-2 gap-[30px] pb-[40px]">
          {itemsData.map((item) => {
            if (item.popular === true) {
              return (
                <Item
                  img={item.img}
                  key={item.id}
                  price={item.price}
                  newItems={item.newItems}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* button */}
        <button className="border-2 border-black px-7 py-2 font-[800] tracking-[2px] hover:text-white text-[13px] hover:bg-black text-center">
          show more
        </button>
      </Parallax>
    </div>
  );
};

export default PopularSection;
