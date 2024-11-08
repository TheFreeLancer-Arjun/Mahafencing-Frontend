import React from "react";
import { Link } from "react-router-dom";

export default function GalleryPage() {
  const images = [
    {
      src: "http://mahafencing.in/assets/img/gallery/website/a%20(8).jpeg",
      title: "Award Function",
    },
    {
      src: "http://mahafencing.in/assets/img/gallery/website/a%20(19).jpeg",
      title: "Fresher Party",
    },
    {
      src: "http://mahafencing.in/assets/img/gallery/website/a%20(4).jpeg",
      title: "Fairwell Function",
    },
  ];

  return (
    <div className="bg-yellow-50 ">
      <div class="max-w-3xl mx-auto text-center ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight  border-b-2 border-gray-500 pb-2">
          Our Gallery
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Celebrating Achievements and Memories
        </p>
      </div>

      <div className="gallery-page">
        {/* Header */}{" "}
        <div className="modern-gallery-page min-h-screen bg-yellow-50">
          <section className="gallery-grid container mx-auto mt-16  px-4">
            <h1 class="text-2xl mb-5 md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-green-400 ">
              2022 Memories
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div>
                  <Link to="/photos-gallery">
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    >
                      <div className="relative w-full h-64 overflow-hidden  shadow-md group  hover:border-[6px] border-[#51B85D] rounded-lg">
                        <div className="relative w-full h-64 bg-black shadow-lg rounded-lg overflow-hidden">
                          <div className="relative w-full h-64 border-4  shadow-lg  overflow-hidden ">
                            <img
                              src={image.src}
                              alt={image.title || `Gallery ${index + 1}`}
                              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
                              title={image.title}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col items-center justify-center p-4">
                              <h3 className="text-white text-lg font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                {image.title}
                              </h3>

                              <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 hover:bg-gray-200">
                                View More
                              </button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
                              <h4 className="text-gray-800 text-sm font-semibold truncate">
                                {image.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
