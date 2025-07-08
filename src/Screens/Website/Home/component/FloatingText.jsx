import React from "react";

export default function FloatingText() {
  return (
      <div   className="absolute left-20 top-52 flex flex-col items-center justify-center text-white z-[100] h-[4cm] xs:hidden md:flex">
            <div className="w-full  mb-4">
              <p className="text-2xl uppercase  flex justify-start font-bold">
                The fire is within all of us
              </p>
            </div>
            <h2
              className=" uppercase"
            style={{fontFamily:"CodeProBlack"}}
            >
              <h2 className="text-8xl ">We are the</h2>
              <h2 className="text-9xl">best Associations</h2>
            </h2>
          </div>
  );
}
