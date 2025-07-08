import React, { useEffect } from "react";
import { useNews } from "../../../hook/useNews";

export default function Latest_news() {
  const { latestNews, nextSixNews, fetchLatestWithSix, loading } = useNews();

  useEffect(() => {
    fetchLatestWithSix();
  }, []);

  if (loading)
  return (
    <div className="pl-5 pr-5 lg:pl-28 lg:pr-24 py-20 animate-pulse">
      <div className="flex justify-start items-end">
        <div className="lg:text-9xl text-4xl font-extrabold mb-5 bg-gray-300 rounded w-64 h-12"></div>
      </div>
      <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#059ABA] flex flex-col lg:flex-row">
        <div className="rounded-lg leading-relaxed w-full lg:flex">
          {/* Left Skeleton - Large News */}
          <div className="w-full lg:w-[50%] p-3 space-y-4">
            <div className="w-full h-[11cm] bg-gray-300 rounded-r-3xl"></div>
            <div className="w-20 h-4 bg-[#059ABA]/50 rounded"></div>
            <div className="w-full h-8 bg-gray-300 rounded"></div>
          </div>

          {/* Right Skeleton - Small News */}
          <div className="w-full lg:w-[50%] p-5 grid grid-cols-2 gap-5">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="w-full h-[7cm] bg-gray-300 rounded-r-3xl"></div>
                <div className="w-16 h-3 bg-[#059ABA]/50 rounded"></div>
                <div className="w-full h-4 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (!latestNews && nextSixNews.length === 0)
    return <p className="text-center py-10">No news found.</p>;

  // Merge all news and shuffle them
  const shuffled = [...(latestNews ? [latestNews] : []), ...nextSixNews].sort(
    () => Math.random() - 0.5
  );

  const largeItems = shuffled
    .slice(0, 2)
    .map((item) => ({ ...item, size: "large" }));
  const smallItems = shuffled
    .slice(2)
    .map((item) => ({ ...item, size: "small" }));

  const data = [...largeItems, ...smallItems];

  return (
    <div className="pl-5 pr-5 lg:pl-28 lg:pr-24   py-20">
      <div className="   flex justify-start items-end">
        <h1    style={{
              fontFamily: "CodeProBlack",
            }} className="lg:text-9xl text-4xl uppercase font-extrabold mb-5">
          Latest news
        </h1>
      </div>
      <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#059ABA] flex flex-col lg:flex-row">
        <div className="rounded-lg leading-relaxed w-full lg:flex">
          {/* Left - Large news */}
          <div className="w-full lg:w-[50%]">
            {data
              .filter((item) => item.size === "large")
              .map((item) => (
                <div key={item.id} className="w-full p-3">
                  <img
                    className="w-full h-[11cm] object-cover hover:border-[10px] border-[#059ABA] rounded-r-3xl "
                    src={item.url}
                    alt=""
                  />
                  <h1 className="uppercase text-[#059ABA]  font-bold">
                    News
                  </h1>
                  <h1 className="text-2xl lg:text-4xl font-bold mt-5 line-clamp-2 hover:text-[#059ABA]">
                    {item.title}
                  </h1>
                </div>
              ))}
          </div>

          {/* Right - Small news */}
          <div className="w-full lg:w-[50%] flex gap-5">
            <div className="w-full p-5">
              <div className="w-full grid grid-cols-2 gap-5">
                {data
                  .filter((item) => item.size === "small")
                  .map((item) => (
                    <div key={item.id} className="w-full">
                      <img
                        className="w-full h-[7cm] object-cover hover:border-[10px] border-[#059ABA] rounded-r-3xl"
                        src={item.url}
                        alt=""
                      />
                         <h1 className="uppercase text-[#059ABA]  font-bold">
                    News
                  </h1>
                      <h1 className="text-lg font-bold mt-5 line-clamp-2 hover:text-[#059ABA]">
                        {item.title}
                      </h1>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
