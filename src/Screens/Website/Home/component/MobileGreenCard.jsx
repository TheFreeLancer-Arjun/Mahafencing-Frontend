import React, { useEffect } from "react";
import { useBlueCard } from "../../../../hook/useBlueCard";

export default function MobileGreenCard() {
  const { latestBlueCard, fetchLatest, loading, error } = useBlueCard();

  useEffect(() => {
    fetchLatest();
  }, []);

  if (loading || error || !latestBlueCard) return null;

  const { title1, title2, title3, title4, title5 } = latestBlueCard;

  return (
    <div className="h-[6.5cm] w-full bg-[#51B85D] text-white flex items-center justify-start rounded-l-2xl pt-10 pb-10 p-6 leading-[16px]">
      <div className="text-black">
        <p className="text-lg font-light uppercase line-clamp-1">{title1}</p>
        <h2
          className="text-2xl font-bold uppercase line-clamp-2"
          style={{
            fontFamily: "CodeProBlack",
          }}
        >
          {title2}
        </h2>
        <p
          className="text-5xl font-bold my-2 line-clamp-1"
          style={{
            fontFamily: "CodeProBlack",
          }}
        >
          {title3}
        </p>
        <p
          className="text-2xl font-bold line-clamp-1"
          style={{
            fontFamily: "CodeProBlack",
          }}
        >
          {title4}
        </p>
        <p className="text-md mt-1 line-clamp-2">{title5}</p>
      </div>
    </div>
  );
}
