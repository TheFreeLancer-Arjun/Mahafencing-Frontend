import React, { useEffect, useState } from "react";
import MobileCard from "./component/MobileCard";
import InfoCard from "./component/InfoCard";
import FloatingText from "./component/FloatingText";
import { useBannerImage } from "../../../hook/useBannerImage";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { bannerImages, loading, error, fetchAll } = useBannerImage();

  useEffect(() => {
    fetchAll(); // ✅ Just call, don't await
  }, []);

  useEffect(() => {
    if (bannerImages.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [bannerImages]);

  if (loading) {
    return (
      <>
        {/* Banner Carousel Skeleton */}
        <div className="relative w-screen bg-[#FEF9D9]">
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-[110vh] overflow-hidden animate-pulse">
            {/* Image area */}
            <div className="absolute w-full h-full bg-gray-300" />

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent z-10" />

            {/* Floating Text Placeholder */}
            <div className="absolute left-20 top-52 z-20 hidden md:flex flex-col gap-4">
              <div className="h-6 w-80 bg-gray-500 rounded"></div>
              <div className="h-20 w-[24rem] bg-gray-300 rounded"></div>
              <div className="h-24 w-[30rem] bg-gray-300 rounded"></div>
            </div>

            {/* Info Cards Placeholder */}
            <div className="absolute bottom-[-26px] right-[21.2cm] h-[8cm] w-[9cm] bg-gray-300 rounded-l-[40px] p-8 z-20 hidden md:flex" />
            <div className="absolute bottom-[-26px] right-[12.1cm] h-[11cm] w-[9cm] bg-gray-300 rounded-l-[40px] p-8 z-20 hidden md:flex" />
            <div className="absolute bottom-[-26px] right-28 h-[11cm] w-[9cm] bg-gray-400 rounded-l-[40px] p-8 z-20 hidden md:flex" />
          </div>
        </div>

        {/* Mobile Card Skeleton */}
        <div className="md:hidden bg-black flex flex-col items-end justify-end animate-pulse">
          <div className="flex flex-col items-end text-white h-[4cm] w-full px-4 gap-2">
            <div className="h-4 w-48 bg-gray-500 rounded"></div>
            <div className="h-8 w-60 bg-gray-400 rounded"></div>
            <div className="h-10 w-72 bg-gray-300 rounded"></div>
          </div>

          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`h-[${i === 0 ? "2.5cm" : "3.5cm"}] w-[10cm] bg-gray-${
                300 + i * 100
              } text-white rounded-l-2xl p-6 my-2`}
            />
          ))}
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center bg-red-100 text-red-700 font-bold">
        Failed to load banners: {error}
      </div>
    );
  }

  return (
    <>
      <div id="controls-carousel" className="relative w-screen bg-[#FEF9D9]">
        <div className="relative h-80 sm:h-80 md:h-[110vh] lg:h-[110vh] overflow-hidden">
          {bannerImages.map((item, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out absolute top-0 left-0 w-full h-full transition-opacity ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item.url} // ✅ Correct property name
                className="absolute w-full h-full object-fill"
                alt={item.title || `Banner ${index + 1}`}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/100 to-transparent z-10" />
            </div>
          ))}

          <FloatingText />
          <InfoCard />
        </div>

        {/* Previous Button */}
        <button
          onClick={() =>
            setActiveIndex((prev) =>
              prev === 0 ? bannerImages.length - 1 : prev - 1
            )
          }
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full lg:bg-white/30 ">
            <ChevronLeft className="text-white w-6 h-6" />
          </span>
        </button>

        {/* Next Button */}
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev + 1) % bannerImages.length)
          }
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full lg:bg-white/30 group-hover:bg-white/50">
            <ChevronRight className="text-white w-6 h-6" />
          </span>
        </button>
      </div>

      <MobileCard />
    </>
  );
};

export default CarouselPage;
