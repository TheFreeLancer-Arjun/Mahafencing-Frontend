import React from "react";
import { useShowGallery } from "../../../../hook/useShowGallery";

export default function GALLERYshow() {
  const { galleries, loading, error } = useShowGallery();

  if (loading) {
    // Skeleton loader
    return (
      <div className="pl-5 pr-5 lg:pl-28 lg:pr-24 py-20 animate-pulse">
        <div className="flex justify-start items-end mb-5">
          <div className="h-16 lg:h-32 w-48 lg:w-[30rem] bg-gray-300 rounded-xl"></div>
        </div>

        <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#45A750] flex flex-col lg:flex-row gap-4">
          {/* Left - Large Skeletons */}
          <div className="w-full lg:w-[50%] flex flex-col gap-4 p-3">
            <div className="w-full h-[11cm] bg-gray-300 rounded-r-3xl"></div>
            <div className="w-20 h-4 bg-[#5FB366]/60 rounded"></div>
            <div className="w-full h-6 bg-gray-300 rounded"></div>
          </div>

          {/* Right - Small Skeletons */}
          <div className="w-full lg:w-[50%] grid grid-cols-2 gap-5 p-3">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="w-full h-[7cm] bg-gray-300 rounded-r-3xl"></div>
                <div className="w-16 h-3 bg-[#5FB366]/60 rounded"></div>
                <div className="w-full h-4 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error)
    return <p className="text-red-500 text-center mt-10">{error}</p>;

  if (!galleries || galleries.length === 0)
    return <p className="text-center mt-10">No gallery items found.</p>;

  // Shuffle logic for random large/small
  const shuffled = [...galleries].sort(() => Math.random() - 0.5);
  const largeItems = shuffled.slice(0, 2).map((item) => ({ ...item, size: "large" }));
  const smallItems = shuffled.slice(2).map((item) => ({ ...item, size: "small" }));
  const data = [...largeItems, ...smallItems];

  return (
    <div className="pl-5 pr-5 lg:pl-28 lg:pr-24 py-20">
      <div className="flex justify-start items-end">
        <h1  style={{
              fontFamily: "CodeProBlack",
            }} className="lg:text-9xl text-4xl uppercase font-extrabold mb-5">GALLERY</h1>
      </div>

      <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#45A750] flex flex-col lg:flex-row">
        <div className="rounded-lg leading-relaxed w-full lg:flex">
          {/* Left - Large items */}
          <div className="w-full lg:w-[50%]">
            {data.map((item) =>
              item.size === "large" ? (
                <div key={item.id} className="w-full p-3">
                  <img
                    className="w-full h-[11cm] object-cover hover:border-[10px] border-[#45A750] rounded-r-3xl"
                    src={item.url}
                    alt=""
                  />
                  <h1 className="uppercase text-[#45A750] font-bold">Photo</h1>
                  <h1 className="text-2xl lg:text-4xl font-bold mt-5 line-clamp-2 hover:text-[#45A750] uppercase">
                    {item.title}
                  </h1>
                </div>
              ) : null
            )}
          </div>

          {/* Right - Small items */}
          <div className="w-full lg:w-[50%] flex gap-5">
            <div className="w-full p-5">
              <div className="w-full grid grid-cols-2 gap-5">
                {data.map((item) =>
                  item.size === "small" ? (
                    <div key={item.id} className="w-full">
                      <img
                        className="w-full h-[7cm] object-cover hover:border-[10px] border-[#45A750] rounded-r-3xl"
                        src={item.url}
                        alt=""
                      />
                      <h1 className="uppercase text-[#45A750] font-bold">Photo</h1>
                      <h1 className="text-lg font-bold mt-5 line-clamp-2 hover:text-[#45A750] uppercase">
                        {item.title}
                      </h1>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
