import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarouselPage from "./CarouselPage";
import HomePageFeatures from "./HomePageFeatures";
import {
  notices,
  newsScroll,
  ourInspirations,
  ourOfficeBearers,
} from "../../../data/HomePage";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// Function to wrap text with span elements for animation
function wrapTextWithSpans(text) {
  return text.split("").map((char, i) => (
    <span key={i} className="char-span">
      {char}
    </span>
  ));
}

export default function HomePage() {
  const data = [
    {
      id: 1,
      image: "http://mahafencing.in/assets/inaugration/b%20(2).jpeg",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quis. Lorem ipsum dolor sit amet consectetur.",
      size: "large",
    },
    {
      id: 2,
      image: "http://mahafencing.in/assets/inaugration/b%20(1).jpeg",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quis. Lorem ipsum dolor sit amet consectetur.",
      size: "small",
    },
    {
      id: 3,
      image: "http://mahafencing.in/assets/inaugration/b%20(3).jpeg",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quis. Lorem ipsum dolor sit amet consectetur.",
      size: "small",
    },
    {
      id: 4,
      image: "http://mahafencing.in/assets/inaugration/b%20(5).jpeg",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quis. Lorem ipsum dolor sit amet consectetur.",
      size: "small",
    },
    {
      id: 5,
      image: "http://mahafencing.in/assets/inaugration/b%20(6).jpeg",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quis. Lorem ipsum dolor sit amet consectetur.",
      size: "small",
    },
  ];

  useEffect(() => {
    const chars = document.querySelectorAll(".char-span");
    if (chars.length > 0) {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 50, color: "black" },
        {
          opacity: 1,
          y: 0,
          color: "black",
          duration: 0.2,
          stagger: 0.05,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".anime",
            scroller: "body",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const marqueeRef = useRef(null);

  const handleMarqueeEnter = () => marqueeRef.current.stop();
  const handleMarqueeLeave = () => marqueeRef.current.start();

  return (
    <>
      <div className=" bg-yellow-50 ">
        {/* Carousel */}
        <CarouselPage />

        {/* Scrolling News Section */}
        <div className="group relative bg-gray-600 text-black overflow-hidden py-2">
          <div className="absolute inset-y-0 left-0 z-10 flex items-center px-4 sm:px-6 bg-black text-white font-bold shadow-lg h-full">
            <span className="text-xs sm:text-base">🚨 What's New</span>
          </div>
          <div className="scrolling-news whitespace-nowrap flex space-x-4 group-hover:paused text-white">
            {newsScroll.map((item) => (
              <span
                key={item.id}
                className="py-2 px-3 rounded-lg shadow-md font-semibold text-xs sm:text-base"
              >
                {item.icon} {item.news}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full px-4 lg:px-32 py-20 bg-yellow-50">
          <h1
            style={{ fontWeight: "900", fontFamily: "DynaPuff" }}
            className="text-2xl lg:text-5xl text-start mt-4 mb-4 font-bold uppercase"
          >
            Mahafencing Association
          </h1>
          <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#06B4DB] flex flex-col lg:flex-row">
            <div className="rounded-lg leading-relaxed lg:w-[70%] w-full">
              <div className="anime w-full p-5">
                <div className="anime text-black mt-3 lg:mt-7 text-sm lg:text-xl">
                  <p className="mb-4 font-bold">
                    {wrapTextWithSpans(
                      "Shri Chhatrapati Shivaji Maharaj established Swaraj (Own Kingdom) in the country using his sword and wrote the glorious history of the Marathas in golden words. But in the meantime European countries gave the appearance of a sword fighting skill. Sword fighting game is known as fencing in worldwide. Fencing came to India in 1974 with modern rules and modern equipments. The game also started in Maharashtra during this period. In the early days, the task of spreading and propagating the sword in Maharashtra began to overcome many obstacles."
                    )}
                  </p>
                  <p className="mb-4 font-bold">
                    {wrapTextWithSpans(
                      "Fencing is being played in all the districts of Maharashtra today and Maharashtra fencing association has more than fifteen thousand registered players. Maharashtra is ranking first in the country as the most widely circulated and propagated state of fencing. On behalf of Maharashtra fencing Association, state tournaments are organized every year in under ten years, under twelve, under 14, under 17, under 20, under 23, senior age categories and Federation Cup."
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* News Section */}
            <div className="bg-black lg:w-[30%] w-full rounded-lg mt-5 lg:mt-0">
              <div className="flex flex-col items-center">
                <div className="w-[60%] h-[0.95cm] text-white font-bold bg-black flex justify-center items-center rounded-full mt-2 lg:mb-1">
                  NEWS AND UPDATE
                </div>
                <div
                  onMouseEnter={handleMarqueeEnter}
                  onMouseLeave={handleMarqueeLeave}
                  className="border pl-3 border-gray-950 bg-yellow-50 w-full lg:w-auto overflow-hidden flex flex-nowrap flex-col"
                >
                  <marquee
                    ref={marqueeRef}
                    direction="up"
                    className="lg:h-[10cm] xs:h-[6cm] duration-700 transition-all flex-shrink-0 overflow-y-auto"
                  >
                    {notices.map((item, index) => (
                      <div key={index} className="shadow-md p-2">
                        <p>{item.text}</p>
                        <span className="inline ml-5">{item.date}</span>
                        <a
                          href={item.link}
                          className="ml-10 bg-black text-white px-5 rounded-full"
                        >
                          Download
                        </a>
                      </div>
                    ))}
                  </marquee>
                </div>
                <div className="bg-[#1f2937] lg:w-[25%] h-[0.2cm] mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirations Section */}
        <HomePageFeatures
          data={ourInspirations}
          title="Our Inspirations"
          columns={2}
        />
        <HomePageFeatures
          data={ourOfficeBearers}
          title="Our Office Bearers"
          columns={2}
        />

        <div className="pl-5 pr-5 lg:pl-40 lg:pr-56">
          <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#06B4DB] flex flex-col lg:flex-row">
            <div className="rounded-lg leading-relaxed w-full flex flex-col lg:flex-row">
              {/* Left Side (Full width on mobile, half on larger screens) */}
              {data.map((item) => {
                if (item.size === "large") {
                  return (
                    <div key={item.id} className="w-full lg:w-[50%]">
                      <div className="w-full p-3">
                        <img
                          className="w-full h-[7cm] hover:border-[6px] border-[#06B4DB] rounded-lg"
                          src={item.image}
                          alt=""
                        />
                        <h1 className="text-2xl lg:text-3xl font-bold mt-5 line-clamp-2">
                          {item.title}
                        </h1>
                      </div>
                    </div>
                  );
                }
              })}

              {/* Right Side (Full width on mobile, half on larger screens) */}
              <div className="w-full lg:w-[50%]  p-5">
                <div className="w-full flex flex-wrap gap-5">
                  {data.map((item) => {
                    if (item.size === "small") {
                      return (
                        <div key={item.id} className="w-full lg:w-[45%]">
                          <img
                            className="w-full h-[4.5cm] hover:border-[6px] border-[#06B4DB] rounded-lg"
                            src={item.image}
                            alt=""
                          />
                          <h1 className="text-sm font-bold mt-5 line-clamp-2">
                            {item.title}
                          </h1>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="lg:h-[50vh] w-screen bg-black text-white py-16 bg-cover bg-center flex justify-center items-center "
          style={{
            backgroundImage:
              "url('https://cdn.sanity.io/images/3do82whm/next/b88e6888748d4209f8c6746ac5507c673b2a01e9-1440x800.svg?w=3840&q=75&fit=clip&auto=format')",
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-10">
              Contact Us
            </h2>

            <Link
              to="/contact"
              type="submit"
              className="text-black hover:bg-green-200 text-lg md:text-xl font-semibold px-6 md:px-8 py-2 bg-white border border-b-[5px] border-r-[5px] border-green-400 rounded-t-xl"
            >
              Send Message
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
