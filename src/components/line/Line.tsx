import React from "react";

interface LineInterface {
  LineColor: string;
}

const Line = ({LineColor}: LineInterface ) => {
  return <hr 
    style={{
      borderColor: LineColor,
    }} className="w-[4rem] lg:w-[6.5rem] border-t-2 border-solid border-white my-6" />;
};

export default Line;
