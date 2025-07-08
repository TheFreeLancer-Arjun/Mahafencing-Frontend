import React from "react";
import Card from "./card";
import { Link } from "react-router-dom";

export default function InfoCard() {
  return (
    <div>
      {/* Orange box at the bottom */}
      <div className="absolute bottom-[-26px] right-[21.2cm] h-[8cm] w-[9cm] bg-[#E23A53] text-white items-center justify-center rounded-l-[40px] p-6 z-20 hidden md:flex">
        <div className="text-black   ">
          <h2
            className="text-4xl  uppercasen "
            style={{
              fontFamily: "CodeProBlack",
            }}
          >
            Stay updated
          </h2>
          <p className="text-2xl font-medium  my-2  hover:underline cursor-pointer">
           <Link to="/blog">

           
            Click here to blog and get the latest updates on the mahafencing
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute bottom-[-26px] right-[12.1cm] h-[11cm] w-[9cm] bg-[#51B85D] text-white items-center justify-center rounded-l-[40px] p-6 z-20 hidden md:flex">
        <div className="text-black ">
          <p className="text-2xl font-medium uppercase ">Countdown to</p>
          <h2
            className="text-[30px]  uppercase"
            style={{
              fontFamily: "CodeProBlack",
            }}
          >
            International, Asian & Olympic
          </h2>
          <p
            className="text-6xl  my-2"
           style={{
              fontFamily: "CodeProBlack",
            }}
          >
            15,000+
          </p>
          <p
            className="text-2xl font-bold"
      
          >
            Registered Players
          </p>
          <p className="text-lg mt-5">At Mahafencing Associations</p>
        </div>
      </div>
      <Card />
    </div>
  );
}
