import React from "react";
import LookBookBox from "./LookBookBox/LookBookBox";

const LookBook = () => {
  return (
    <div className="w-[98%] h-[100%] mx-auto grid grid-cols-4 p-3 gap-3">
      <LookBookBox />
      <LookBookBox />
      <LookBookBox />
      <LookBookBox /> <LookBookBox />
      <LookBookBox />
      <LookBookBox />
      <LookBookBox /> <LookBookBox />
      <LookBookBox />
      <LookBookBox />
      <LookBookBox />
    </div>
  );
};

export default LookBook;
