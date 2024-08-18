import React from "react";
import { FaArrowDownWideShort } from "react-icons/fa6";
import Item from "../Item/Item";

const ProductItemsSection = () => {
  return (
    <div>
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
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default ProductItemsSection;
