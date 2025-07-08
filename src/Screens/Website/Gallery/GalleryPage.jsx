import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";

export default function GalleryPage() {
  const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1a3FTnhJWhg-JoCgOkAWIdW9CXsObdWQNqQ&s",
      title: "Award Function",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1a3FTnhJWhg-JoCgOkAWIdW9CXsObdWQNqQ&s",
      title: "Fresher Party",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1a3FTnhJWhg-JoCgOkAWIdW9CXsObdWQNqQ&s",
      title: "Farewell Function",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-yellow-50 w-full px-4 lg:px-32 py-20">
      <h1
        className="text-4xl lg:text-9xl text-start font-bold uppercase mb-10"
       style={{
              fontFamily: "CodeProBlack",
            }}
      >
        Our Gallery
      </h1>

      <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#059ABA]">
        <section className="min-h-screen">
          <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-[#059ABA] pl-2 mb-6">
            2022 Memories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="group relative rounded-lg shadow-lg overflow-hidden cursor-pointer border-4 border-[#06B4DB]"
              >
                <div className="w-full h-64 bg-black relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
                  />

                  <div className="absolute inset-0 bg-[#06B4DB] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex flex-col items-center justify-center p-4">
                    <h3 className="text-white text-2xl font-bold mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {image.title}
                    </h3>
                    <button className="bg-[#06B4DB] text-white px-4 py-2 rounded-full text-md font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#059ABA]">
                      View Larger
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-[#06B4DB] p-2">
                    <h4 className="text-white text-xl font-semibold truncate">
                      {image.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for Fullscreen View */}
          {showModal && selectedIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
              <button
                className="absolute top-4 right-4 bg-white text-black p-2 rounded-full text-2xl"
                onClick={closeModal}
              >
                <AiOutlineCloseCircle />
              </button>

              <button
                className="absolute left-6 lg:left-20 top-1/2 transform -translate-y-1/2 bg-white text-black text-xl px-4 py-2 rounded-full shadow-lg"
                onClick={previousImage}
              >
                <GrChapterPrevious />
              </button>

              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
              />

              <button
                className="absolute right-6 lg:right-20 top-1/2 transform -translate-y-1/2 bg-white text-black text-xl px-4 py-2 rounded-full shadow-lg"
                onClick={nextImage}
              >
                <GrChapterNext />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
