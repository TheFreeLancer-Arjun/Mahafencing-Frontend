// components/NewsMarquee.js
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNews } from "../../../../hook/useNews"; // adjust path if needed

export default function NewsMarquee() {
  const marqueeRef = useRef(null);
  const tlRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const { latestNews, nextSixNews, loading, fetchLatestWithSix } = useNews();

  useEffect(() => {
    fetchLatestWithSix();
  }, []);

  useEffect(() => {
    const container = marqueeRef.current;
    if (container) {
      const items = container.querySelectorAll(".marquee-item");

      // Reset old timeline if exists
      if (tlRef.current) tlRef.current.kill();

      tlRef.current = gsap.timeline({ repeat: -1, paused: false });

      items.forEach((item) => {
        const height = item.offsetHeight;
        tlRef.current.to(container, {
          y: `-=${height}`,
          duration: 6,
          ease: "none",
        });
      });

      tlRef.current.set(container, { y: 0 });
    }

    return () => tlRef.current && tlRef.current.kill();
  }, [latestNews, nextSixNews]);

  const notices = [
    ...(latestNews ? [{ text: latestNews.title, date: new Date(latestNews.createdAt).toLocaleDateString(), link: latestNews.pdfUrl }] : []),
    ...nextSixNews.map((item) => ({
      text: item.title,
      date: new Date(item.createdAt).toLocaleDateString(),
      link: item.pdfUrl,
    })),
  ];

  return (
    <div className="border-[4px] border-[#059ABA] lg:w-[35%] lg:h-[10cm] rounded-lg overflow-hidden shadow-lg lg:mt-12 p-4 bg-[#101010]">
      <div className="flex flex-col items-center">
        <div
      
          className="w-[60%] h-[2.5rem] text-[#101010] font-bold flex justify-center items-center rounded-full mt-2 mb-2 bg-yellow-50 text-xl border-4 border-[#059ABA]"
        >
          NEWS AND UPDATES
        </div>

        <div
          onMouseEnter={() => {
            setPaused(true);
            tlRef.current?.pause();
          }}
          onMouseLeave={() => {
            setPaused(false);
            tlRef.current?.resume();
          }}
          className="border-4 border-[#059ABA] bg-yellow-50 w-full rounded-lg shadow-inner h-[7cm] overflow-hidden relative"
        >
          {loading ? (
            <div className="text-center p-4">Loading...</div>
          ) : (
            <div ref={marqueeRef} className="flex flex-col absolute top-0">
              {notices.map((item, index) => (
                <div
                  key={index}
                  className="marquee-item px-3 py-4 border-b-4 border-[#059ABA]  text-[#101010]"
                >
                  <p className="font-medium">{item.text}</p>
                  <span className="inline ml-2 text-sm">{item.date}</span>
                  <div className="flex justify-end">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black mt-5 hover:bg-[#E23A53] text-sm font-semibold px-3 py-1 bg-white border border-b-[5px] border-r-[5px] border-[#E23A53] rounded-t-xl"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
