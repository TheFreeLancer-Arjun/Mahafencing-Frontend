import React from "react";
import { Link } from "react-router-dom";
import { useOfficeBearerStatic } from "../../../hook/useOfficeBearerStatic";

export default function PageFeatures() {
  const { data: ourOfficeBearers, loading, error } = useOfficeBearerStatic();

  const skeletonArray = new Array(3).fill(0); // Adjust number as needed

  return (
    <div className="bg-yellow-50 flex flex-col items-center w-full border-t-[20px] border-t-[#059ABA] border-b-[20px] border-b-[#45A750] mb-20">
      <h1 className="text-center mt-5 text-2xl font-bold bg-yellow-50 border-b-[3px] border-r-[3px] border border-black rounded-xl px-7 py-2 text-black uppercase">
        Office Bearers
      </h1>

      {error && <p className="text-lg text-red-500 mt-6">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4 w-full max-w-7xl justify-items-center mb-10">
        {loading
          ? skeletonArray.map((_, index) => (
              <div
                key={index}
                className="rounded-2xl h-[15cm] w-[8cm] shadow-lg overflow-hidden bg-white border-[2px] border-black animate-pulse"
              >
                <div className="h-[11cm] w-[8cm] bg-gray-300" />
                <div className="text-center pt-4 bg-[#F6F2DF] h-[4cm] border border-[#059ABA] border-t-[10px]">
                  <div className="h-6 w-32 bg-gray-300 rounded mx-auto mb-4" />
                  <div className="h-4 w-40 bg-gray-300 rounded mx-auto mb-2" />
                  <div className="h-3 w-24 bg-gray-300 rounded mx-auto" />
                </div>
              </div>
            ))
          : ourOfficeBearers.map((bearer, index) => (
              <Link
                to={bearer.pageLink || "#"}
                key={bearer.id || index}
                className="w-full max-w-[8cm]"
              >
                <div className="rounded-2xl h-[15cm] w-[8cm] shadow-lg overflow-hidden bg-white border-[2px] border-black hover:border-[6px] hover:border-[#45A750] hover:rounded-2xl">
                  <img
                    className="h-[11cm] w-[8cm] object-cover object-center border border-white"
                    src={bearer.url}
                    alt={bearer.name}
                  />
                  <div className="text-center mt-2 pt-4 bg-[#F6F2DF] text-black h-[4cm] border border-[#059ABA] border-t-[10px]">
                    <span className="text-xl font-semibold px-1 py-2 bg-white border border-b-[3px] border-r-[3px] border-[#45A750] rounded-t-xl">
                      {bearer.name}
                    </span>
                    <p className="mt-5 mx-5 text-sm font-semibold bg-white border py-2 border-b-[3px] border-r-[3px] border-black rounded-t-xl">
                      {bearer.designation}
                    </p>
                    <p className="text-[10px] px-4 mt-1">{bearer.description}</p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
