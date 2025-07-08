import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useOurInspirations } from "../../../hook/useOurInspirations"; // adjust path as needed

const HomePageFeatures = ({ title = "Our Leadership", columns = 2 }) => {
  const { inspirations, loading, error, fetchInspirations } = useOurInspirations();

  useEffect(() => {
    fetchInspirations();
  }, []);

  const skeletonArray = new Array(4).fill(null); // show 4 skeletons

  return (
    <div className="bg-yellow-50 flex flex-col justify-center items-center w-full border-t-[20px] border-t-[#059ABA] mb-20">
      <h1 className="text-center mt-5 text-2xl font-bold bg-yellow-50 border-b-[3px] border-r-[3px] border border-black rounded-xl px-7 py-2 text-black uppercase">
        {title}
      </h1>

      {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

      {/* Cards or Loading Skeleton */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
        } lg:gap-28 xs:gap-5 mt-5 xs:w-[80%] lg:w-[50%]`}
      >
        {loading
          ? skeletonArray.map((_, index) => (
              <div
                key={index}
                className="rounded-2xl h-[15cm] w-[8cm] shadow-lg overflow-hidden p-0 bg-white border-[2px] border-black animate-pulse"
              >
                <div className="h-[11cm] w-[8cm] bg-gray-300" />
                <div className="text-center mt-2 pt-4 bg-[#F6F2DF] text-black h-[4cm] border border-[#059ABA] border-t-[10px] px-2">
                  <div className="h-6 w-28 bg-gray-300 mx-auto mb-3 rounded" />
                  <div className="h-4 w-40 bg-gray-300 mx-auto mb-2 rounded" />
                  <div className="h-3 w-36 bg-gray-200 mx-auto rounded" />
                </div>
              </div>
            ))
          : inspirations.map((card, index) => (
              <Link to={card.pageLink || "#"} key={index} className="w-full">
                <div className="rounded-2xl h-[15cm] w-[8cm] shadow-lg overflow-hidden p-0 bg-white border-[2px] border-black hover:border-[6px] hover:rounded-2xl hover:border-[#51B85D]">
                  <img
                    className="h-[11cm] w-[8cm] object-cover object-center border border-white"
                    src={card.url}
                    alt={card.name}
                  />
                  <div className="text-center mt-2 pt-4 bg-[#F6F2DF] text-black h-[4cm] border border-[#059ABA] border-t-[10px]">
                    <span className="text-xl font-semibold px-1 py-2 bg-white border border-b-[3px] border-r-[3px] border-[#51B85D] rounded-t-xl">
                      {card.name}
                    </span>
                    <p className="mt-5 mx-5 text-sm font-semibold bg-white border py-2 border-b-[3px] border-r-[3px] border-black rounded-t-xl">
                      {card.designation}
                    </p>
                    {card.description && (
                      <p className="text-[10px] px-4 mt-1">{card.description}</p>
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
