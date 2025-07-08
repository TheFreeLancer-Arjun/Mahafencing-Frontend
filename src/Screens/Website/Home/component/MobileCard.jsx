import React from "react";
import { Link } from "react-router-dom";
import MobileGreenCard from "./MobileGreenCard";

export default function MobileCard() {
  return (
    <div className=" bg-black flex   flex-col items-end justify-end md:hidden ">
      {/* Centered text */}
      <div className=" flex flex-col  text-white  w-full  pl-5">
        <div className="w-full flex flex-col ">
          <div className="w-full ">
            <p className="text-sm  font-bold ">The fire is within all of us</p>
          </div>
          <h2
            className="font-bold   uppercase "
            style={{ fontWeight: "900", fontFamily: "Anton" }}
          >
            <h2 className="text-4xl">We are the</h2>
            <h2 className="text-5xl">best Association</h2>
          </h2>
        </div>
      </div>

      <div className="pl-5 w-full">


      <div className="h-[3cm] w-full  bg-[#E23A53] text-white flex items-center justify-start rounded-l-2xl pt-4  pb-4 p-6  ">
        <div className="text-black ">
          <h2
            className="text-2xl font-bold uppercase"
            style={{
              
              fontFamily: "CodeProBlack",
            }}
          >
            Stay updated
          </h2>

          <p className="text-md mt-1 hover:underline  cursor-pointer">
            {" "}
  <Link to="/blog">
            Click here to blog and get the latest updates on the mahafencing</Link>
          </p>
        </div>
      </div>
      <div className="h-[6.5cm] w-full bg-[#06B4DB] text-white flex items-center justify-start rounded-l-2xl pt-10  pb-10 p-6 leading-[16px] ">
        <div className="text-black ">
          <p className="text-sm font-light uppercase">Countdown to</p>
          <h2
            className="text-2xl font-bold uppercase"
            style={{
              fontWeight: "900",
              fontFamily: "codeProBlack",
            }}
          >
            International, Asian, and Olympic
          </h2>
          <p
            className="text-5xl font-bold my-2"
            style={{
              fontWeight: "900",
              fontFamily: "codeProBlack",
            }}
          >
            15,000+
          </p>
          <p
            className="text-2xl font-bold"
            style={{
              fontWeight: "900",
              fontFamily: "codeProBlack",
            }}
          >
            Registered Players
          </p>
          <p className="text-lg mt-1">At Mahafencing Associations</p>
        </div>
      </div>
   

      <MobileGreenCard/>
      </div>

    </div>
  );
}
