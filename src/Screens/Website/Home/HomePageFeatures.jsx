import React from "react";
import { Link } from "react-router-dom";

const HomePageFeatures = ({ data, title, columns = 2 }) => {
  return (
    <div className="bg-yellow-50 flex flex-col justify-center items-center w-full border-t-[20px] border border-t-[#06B4DB] mb-20">
      <h1 className="text-center mt-5 text-2xl font-bold bg-yellow-50 border-b-[3px] border-r-[3px] border border-black rounded-xl px-7 py-2 text-black uppercase">
        {title}
      </h1>

      {/* Cards container */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
        } lg:gap-28 xs:gap-5 mt-5 xs:w-[80%] lg:w-[50%]  `}
      >
        {data.map((card, index) => (
          <Link to={card.pageLink || "#"} key={index} className="w-full">
            <div className="rounded-2xl shadow-lg overflow-hidden p-0 bg-white border-[2px] border-black  hover:border-[6px] hover:border-[#51B85D] hover:rounded-lg">
              <img
                className="w-full h-auto object-cover object-center border border-white"
                src={card.image}
                alt={card.name}
              />

              <div className="text-center mt-2 pt-4 bg-[#F6F2DF] text-black h-[4cm] border border-[#06B4DB] border-t-[10px]">
            
               <span className="text-xl font-semibold px-1 py-2 bg-white border border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl">
                  {card.name}
                </span>
             
                <p className="mt-5 mx-5 text-sm font-semibold bg-white border py-2 border-b-[3px] border-r-[3px] border-black rounded-t-xl">
                  {card.designation}
                </p>
                {card.description && (
                  <p className="text-[10px] px-4 mt-1 ">{card.description}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePageFeatures;
