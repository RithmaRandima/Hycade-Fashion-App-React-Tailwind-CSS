import React from "react";
import { FaArrowDownWideShort } from "react-icons/fa6";
import Item from "../Item/Item";
import { itemsData } from "../../data/ItemData";

const ProductItemsSection = (props) => {
  return (
    <div className="flex flex-col items-center justify-between">
      {/* product sort section */}
      <div className="mt-[130px] mb-[30px] w-[90%] flex items-center justify-between mx-auto">
        <p className="text-[18px] tracking-[1px] font-[500]">
          <span className="font-[900] mr-1">Showing 1-12</span>
          out if 36 products
        </p>
        <div className="flex items-center text-[14px] hover:bg-black cursor-pointer hover:text-white justify-between gap-3 border-[2px] border-black font-[700] px-3 py-1 rounde ">
          <p>sort by</p>
          <button>
            <FaArrowDownWideShort />
          </button>
        </div>
      </div>
      <div className="w-[95%] py-[20px] overflow-hidden   grid grid-cols-4 gap-5 mx-auto">
        {itemsData.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                img={item.img}
                price={item.price}
                newItems={item.newItems}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <button className="border-2 border-black px-7 py-2 font-[800] tracking-[2px] hover:text-white text-[13px] hover:bg-black">
        show more
      </button>
    </div>
  );
};

export default ProductItemsSection;
