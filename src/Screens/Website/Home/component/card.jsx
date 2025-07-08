import React, { useEffect } from 'react';
import { useBlueCard } from '../../../../hook/useBlueCard';

export default function Card() {
  const { latestBlueCard, fetchLatest, loading, error } = useBlueCard();

  useEffect(() => {
    fetchLatest();
  }, []);

  if (loading) return null;
  if (error || !latestBlueCard) return null;

  const { title1, title2, title3, title4, title5 } = latestBlueCard;

  return (
    <div className="absolute bottom-[-26px] right-28 h-[11cm] w-[9cm] bg-[#06B4DB] text-white items-center justify-center rounded-l-[40px] p-8 z-20 hidden md:flex">
      <div className="text-black  ">
        <p className="text-2xl font-medium uppercase line-clamp-1 ">
          {title1}
        </p>
        <h2
          className="text-3xl font-bold uppercase line-clamp-2 mb-4"
          style={{
              fontFamily: "CodeProBlack",
            }}
        >
          {title2}
        </h2>
        <p
          className="text-6xl font-bold my-2 line-clamp-1"
          style={{
              fontFamily: "CodeProBlack",
            }}
        >
          {title3}
        </p>
        <p
          className="text-2xl font-bold line-clamp-1 mb-2"
        
        >
          {title4}
        </p>
        <p className="text-lg mt-5 line-clamp-3">
          {title5}
        </p>
      </div>
    </div>
  );
}
