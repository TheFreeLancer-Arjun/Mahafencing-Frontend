import React, { useEffect, useState } from "react";
import { homePageSlider } from "../../../data/HomePage";

const CarouselPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % homePageSlider.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="controls-carousel" className="relative w-screen bg-[#FEF9D9]">
        {/* Carousel wrapper */}
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-[90vh] overflow-hidden rounded-lg">
          {homePageSlider.map((image, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out absolute top-0 left-0 w-full h-full transition-opacity ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item={index === activeIndex ? "active" : ""}
            >
              <img
                src={image}
                className="absolute w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
              {/* Overlay for better text visibility */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/100 to-transparent z-10" />
            </div>
          ))}

          {/* Centered text */}
          <div className="absolute left-40 top-44 flex flex-col items-center justify-center text-white z-20 h-[4cm] w-[19cm] xs:hidden md:flex">
            <div className="w-full pl-6">
              <p className="text-xl flex justify-start font-bold">
                The fire is within all of us
              </p>
            </div>
            <h2
              className="font-bold leading-[2.1cm] uppercase"
              style={{ fontWeight: "900", fontFamily: "Anton" }}
            >
              <h2 className="text-6xl">We are the</h2>
              <h2 className="text-8xl">best Associations</h2>
            </h2>
          </div>

          {/* Orange box at the bottom */}
          <div className="absolute bottom-0 right-52 h-[7cm] w-[7cm] bg-[#06B4DB] text-white flex items-center justify-center rounded-l-2xl p-6 z-20 hidden md:flex">
            <div className="text-black">
              <p className="text-sm font-light uppercase">Countdown to</p>
              <h2
                className="text-lg font-bold uppercase"
                style={{
                  fontWeight: "900",
                  fontFamily: "DynaPuff",
                }}
              >
                International, Asian, and Olympic
              </h2>
              <p
                className="text-4xl font-bold my-2"
                style={{
                  fontWeight: "900",
                  fontFamily: "DynaPuff",
                }}
              >
                15,000+
              </p>
              <p
                className="text-md font-bold"
                style={{
                  fontWeight: "900",
                  fontFamily: "DynaPuff",
                }}
              >
                Registered Players
              </p>
              <p className="text-xs mt-1">At Mahafencing Associations</p>
            </div>
          </div>
        </div>

        {/* Previous button */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() =>
            setActiveIndex((prevIndex) =>
              prevIndex === 0 ? homePageSlider.length - 1 : prevIndex - 1
            )
          }
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next button */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() =>
            setActiveIndex(
              (prevIndex) => (prevIndex + 1) % homePageSlider.length
            )
          }
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Box for mobile only */}
      <div className="h-[7cm] bg-black flex   flex-col items-end justify-end md:hidden ">
        {/* Centered text */}
        <div className=" flex flex-col items-end justify-end text-white h-[4cm] w-[19cm] ">
          <div className="w-full pl-6">
            <p className="text-sm flex justify-end font-bold mr-56">
              The fire is within all of us
            </p>
          </div>
          <h2
            className="font-bold leading-[2.1cm] uppercase mr-32"
            style={{ fontWeight: "900", fontFamily: "Anton" }}
          >
            <h2 className="text-3xl">We are the</h2>
            <h2 className="text-4xl">best Association</h2>
          </h2>
        </div>

        <div className="h-[3.5cm] w-[9cm] bg-[#06B4DB] text-white flex items-center justify-start rounded-l-2xl pt-4  pb-4 p-6 leading-[16px] ">
          <div className="text-black ">
            <p className="text-[12px] font-light uppercase">Countdown to</p>
            <h2
              className="text-[15px] font-bold uppercase"
              style={{
                fontWeight: "900",
                fontFamily: "DynaPuff",
              }}
            >
              International, Asian, and Olympic
            </h2>
            <p
              className="text-3xl font-bold my-2"
              style={{
                fontWeight: "900",
                fontFamily: "DynaPuff",
              }}
            >
              15,000+
            </p>
            <p
              className="text-md font-bold"
              style={{
                fontWeight: "900",
                fontFamily: "DynaPuff",
              }}
            >
              Registered Players
            </p>
            <p className="text-xs mt-1">At Mahafencing Associations</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
