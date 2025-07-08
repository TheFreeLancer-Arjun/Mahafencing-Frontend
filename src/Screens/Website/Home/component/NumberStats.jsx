import React, { useEffect } from "react";
import { FaUsers, FaStar, FaTrophy, FaGlobe } from "react-icons/fa";
import { useNumberStats } from "../../../../hook/useNumberStats"; // adjust path

const iconMap = {
  players: <FaUsers size={32} />,
  awardees: <FaStar size={32} />,
  national: <FaTrophy size={32} />,
  international: <FaGlobe size={32} />,
};

const NumberStats = () => {
  const { stats, loading, error, fetchStats } = useNumberStats();

  useEffect(() => {
    fetchStats();
  }, []);

  // Skeleton loader while data is loading
  if (loading) {
    const skeletons = Array(4).fill(null);

    return (
      <div className="bg-yellow-50 text-black py-8 grid grid-cols-2 md:grid-cols-4 text-center border-t-[20px] border-t-[#059ABA]">
        {skeletons.map((_, idx) => (
          <div key={idx} className="flex flex-col items-center py-4 animate-pulse">
            <div className="rounded-2xl h-[15cm] w-[8cm] shadow-lg overflow-hidden p-0 bg-[#F6F2DF] border-[2px] border-[#A46A05]">
              <div className="h-[11cm] w-[8cm] object-cover object-center flex flex-col items-center justify-center">
                <div className="bg-gray-300 h-[5cm] w-full" />
                <div className="h-6 bg-gray-300 rounded w-2/3 mt-4" />
                <div className="h-[3cm] w-[3cm] bg-gray-300 rounded-full mt-4" />
                <div className="h-10 bg-gray-300 w-1/2 mt-4 rounded" />
              </div>
              <div className="text-center bg-[#F6F2DF] text-black h-[4cm] border border-[#A46A05] border-t-[10px] flex flex-col justify-center items-center">
                <div className="bg-gray-300 w-[3cm] h-[1cm] rounded-t-xl rounded-r-xl mb-2" />
                <div className="mt-2 mx-5 w-[6cm] h-[1cm] bg-gray-300 rounded-t-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center text-red-600 font-bold py-8 bg-yellow-50">
        {error}
      </div>
    );
  }

  // Return nothing if no stats
  if (!stats) return null;

  // Actual data
  const formattedStats = [
    {
      icon: iconMap.players,
      number: stats.registeredPlayers ?? 0,
      label: "Registered Players",
    },
    {
      icon: iconMap.awardees,
      number: stats.shivChhatrapatiAwardees ?? 0,
      label: "Shiv Chhatrapati Awardees",
    },
    {
      icon: iconMap.national,
      number: stats.nationalMedalists ?? 0,
      label: "National Medalists",
    },
    {
      icon: iconMap.international,
      number: stats.internationalMedalists ?? 0,
      label: "International Medalists",
    },
  ];

  return (


    <div className="border-t-[20px] border-t-[#059ABA] w-full flex flex-col justify-center items-center  ">
      <h1 className="text-center mt-5 text-2xl font-bold bg-yellow-50 border-b-[3px] border-r-[3px] border border-black rounded-xl px-7 py-2 text-black uppercase">
        Our Medalists
      </h1>
         <div className="bg-yellow-50 text-black py-8 grid grid-cols-2 md:grid-cols-4 text-center gap-20 ">
       
      {formattedStats.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center py-4">
          <div className="rounded-2xl h-[15cm] w-[8cm] shadow-lg overflow-hidden p-0 bg-[#F6F2DF] border-[2px] border-[#A46A05] hover:border-[6px] hover:rounded-2xl hover:border-[#FDE047]">
            <div className="h-[11cm] w-[8cm] object-cover object-center">
              <img
                className="h-[4cm] w-full"
                src="https://olympic.org.nz/images/placeholder-olympic-logo.svg"
                alt=""
              />
              <div     className="text-2xl font-extrabold uppercase">{item.label}</div>
              <div className="w-full flex justify-center items-center">
                <img className="h-[3cm]" src="/Screenshot (305).png" alt="" />
              </div>
              <div   className="text-5xl font-bold">{item.number}</div>
            </div>
            <div className="text-center bg-[#F6F2DF] text-black h-[4cm] border border-[#A46A05] border-t-[10px] flex flex-col justify-center items-center">
              <div className="text-xl font-semibold w-[3cm] h-[1cm] bg-white border border-b-[3px] border-r-[3px] border-[#51B85D] rounded-t-xl rounded-r-xl uppercase text-black">
                {item.number}
              </div>
              <div className="mt-5 mx-5 w-[6cm] h-[1cm] text-sm font-semibold bg-white border py-2 border-b-[3px] border-r-[3px] border-black rounded-t-xl">
                {item.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
 
  );
};

export default NumberStats;
