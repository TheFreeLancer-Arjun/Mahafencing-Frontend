import React from 'react';
import { Link } from 'react-router-dom';

export default function PageFeatures() {
  const ourOfficeBearers = [
    {
      name: "Mr. SHIVAJI RAJEJADHAV",
      image: "http://mahafencing.in/assets/img/all/Shivaji Rajejadhav.jpeg",
      designation: "Working President",
  
      additionalInfo: "(Shivchhatrapati Awardee)",
    },
    {
      name: "Dr. UDAY DONGARE",
      image: "http://mahafencing.in/assets/img/uday.png",
      designation: "Secretary",
   
      additionalInfo: "(Shivchhatrapati Awardee)",
    },
    {
      name: "Mr. RAJKUMAR SOMAVANSHI",
      image: "http://mahafencing.in/assets/img/rajkumar.png",
      designation: "Treasurer",

      additionalInfo: "(Shivchhatrapati Awardee)",
    },
  ];

  return (
    <div className="bg-yellow-50 flex flex-col  justify-center items-center w-full border-t-[20px] border border-t-[#06B4DB] mb-20">
      <h1 className="text-center mt-5 text-2xl font-bold bg-yellow-50 border-b-[3px] border-r-[3px] border border-black rounded-xl px-7 py-2 text-black uppercase">
        Office Bearers
      </h1>
      <div className="w-full flex lg:flex-row  xs:flex-col justify-around items-center bg-yellow-50 mt-5">
        {ourOfficeBearers.map((bearer, index) => (
          <div key={index} className="rounded-2xl w-[8cm] h-[13.5cm] shadow-lg overflow-hidden p-0 bg-white border-[2px] border-black mb-5  hover:border-[6px] hover:border-[#51B85D] hover:rounded-lg">
            <img
              className="w-full h-auto object-cover object-center border border-white"
              src={bearer.image}
              alt={bearer.name}
            />
            <div className="text-center mt-2 pt-4 bg-[#F6F2DF] text-black h-[4cm] border border-[#06B4DB] border-t-[10px]">
              <span className="text-xl font-semibold px-1 py-2 bg-white border border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl">
                {bearer.name}
              </span>
              <p className="mt-5 mx-5 text-sm font-semibold bg-white border py-2 border-b-[3px] border-r-[3px] border-black rounded-t-xl">
                {bearer.designation} 
              </p>
              <p className="text-[10px] px-4 mt-1">{bearer.additionalInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
