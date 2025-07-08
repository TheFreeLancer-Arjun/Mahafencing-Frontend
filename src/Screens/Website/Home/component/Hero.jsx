import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMahafencing } from "../../../../hook/useMahafencing";
import NewsMarquee from "./NewsMarquee"; // Optional, keep if you show news

gsap.registerPlugin(ScrollTrigger);

// Skeleton loader
function HeroSkeleton() {
  return (
    <div className="w-full px-4 lg:px-24 py-20 bg-yellow-50 border-b-[20px] border-[#059ABA] animate-pulse">
      <h1 className="text-4xl lg:text-9xl text-start mb-4 font-extrabold uppercase bg-gray-300 rounded w-72 h-12" />

      <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#059ABA] flex flex-col lg:flex-row gap-6">
        {/* Left - text */}
        <div className="rounded-lg leading-relaxed lg:w-[70%] w-full">
          <div className="w-full pt-5 pr-10 space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-300 rounded w-full" />
            ))}
            <div className="h-4 bg-gray-300 rounded w-[70%]" />
          </div>
        </div>

        {/* Right - marquee skeleton */}
        <div className="border-[4px] border-[#059ABA] lg:w-[35%] lg:h-[10cm] rounded-lg overflow-hidden shadow-lg lg:mt-12 p-4 bg-[#101010] flex flex-col items-center">
          <div className="w-[60%] h-[2.5rem] bg-gray-200 rounded-full mt-2 mb-4" />
          <div className="border-4 border-[#059ABA] bg-yellow-50 w-full rounded-lg h-[7cm] overflow-hidden relative p-4 space-y-4">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="space-y-2">
                <div className="h-4 w-3/4 bg-gray-300 rounded" />
                <div className="h-3 w-1/3 bg-gray-300 rounded" />
                <div className="h-8 w-24 bg-gray-200 rounded mt-2 ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function wrapTextWithSpans(text) {
  return text.split("").map((char, i) => (
    <span key={i} className="char-span">
      {char}
    </span>
  ));
}

export default function Hero() {
  const { latestMahafencing, fetchLatest, loading } = useMahafencing();

  useEffect(() => {
    fetchLatest();
  }, []);

  useEffect(() => {
    const chars = document.querySelectorAll(".char-span");
    if (chars.length > 0) {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          stagger: 0.05,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".anime",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [latestMahafencing?.description]);

  if (loading) return <HeroSkeleton />;

  return (
    <div className="w-full px-4 lg:px-24 py-20 bg-yellow-50 border-b-[20px] border-[#059ABA]">
      <h1    style={{
              fontFamily: "CodeProBlack",
            }} className="text-4xl lg:text-9xl text-start mb-4 font-extrabold uppercase">
        Mahafencing
      </h1>
      <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#059ABA] flex flex-col lg:flex-row">
        <div className="rounded-lg leading-relaxed lg:w-[70%] w-full">
          <div className="anime w-full pt-5 pr-10">
            <div className="text-black mt-3 lg:mt-7 text-sm lg:text-2xl">
              <p className="mb-4 font-bold">
                {wrapTextWithSpans(
                  latestMahafencing?.description ||
                    "Shivaji Maharaj established Swaraj with his sword and wrote a golden chapter in Maratha history. Later, European countries turned sword fighting into a modern sport called fencing. Fencing was introduced in India in 1974 with new rules and equipment. Around the same time, it began in Maharashtra too. Despite many early challenges, fencing slowly spread across the state. Today, it is played in every district of Maharashtra. The Maharashtra Fencing Association has over 15,000 registered players and ranks first in the country for its growth and participation. Every year, the state hosts fencing tournaments in multiple age groups — under 10, 12, 14, 17, 20, 23, seniors, and the Federation Cup — to promote the sport further."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side News Marquee */}
        <NewsMarquee />
      </div>
    </div>
  );
}
