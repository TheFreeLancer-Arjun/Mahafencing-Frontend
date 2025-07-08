import React, { useEffect } from 'react';
import { useNews } from '../../../../hook/useNews'; // adjust path if needed

export default function ScrollingNews() {
  const { latestNews, nextSixNews, loading, fetchLatestWithSix } = useNews();

  useEffect(() => {
    fetchLatestWithSix();
  }, []);

  const combinedNews = [
    ...(latestNews ? [latestNews] : []),
    ...(nextSixNews || []),
  ];

  return (
    <div>
      <div className="group relative bg-yellow-300 text-black overflow-hidden py-2">
        {/* Label section */}
        <div className="absolute inset-y-0 left-0 z-10 flex items-center px-4 sm:px-6 bg-black text-white font-bold shadow-lg h-full">
          <span  className="text-2xl">What's New</span>
        </div>

        {/* Marquee section */}
        <div className="overflow-hidden ml-[200px]">
          <div className="animate-scroll group-hover:[animation-play-state:paused] flex whitespace-nowrap gap-8">
            {loading ? (
              // Skeleton placeholders
              [...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="py-2 px-3 rounded-lg bg-gray-300 animate-pulse w-48 h-6"
                />
              ))
            ) : (
              combinedNews.map((item, index) => (
                <span
                  key={item.id || index}
                  className="py-2 px-3 rounded-lg font-semibold text-xs sm:text-lg"
                >
                  📰 {item.title}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
