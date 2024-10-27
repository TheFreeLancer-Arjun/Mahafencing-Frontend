import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";

const PhotosGallery = () => {
  const images = [
    {
      src: "http://mahafencing.in/assets/img/gallery/fencing%20(25).jpg",
      title: "College Event 2023",
    },
    {
      src: "http://mahafencing.in/assets/img/gallery/fencing%20(36).jpg",
      title: "Graduation Ceremony 2023",
    },
    {
      src: "http://mahafencing.in/assets/img/gallery/fencing%20(3).jpg",
      title: "Science Exhibition",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
    setTimeout(() => {
      const modal = document.querySelector(".modal");
      if (modal) modal.classList.add("fade-in");
    }, 10);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      const nextIndex = (selectedIndex + 1) % images.length; // Loop to the first image after the last
      setSelectedIndex(nextIndex);
    }
  };

  const previousImage = () => {
    if (selectedIndex !== null) {
      const prevIndex = (selectedIndex - 1 + images.length) % images.length; // Loop to the last image after the first
      setSelectedIndex(prevIndex);
    }
  };

  return (
    <div className="bg-yellow-50">
      {/* Hero Section */}

      <div className="max-w-3xl mx-auto text-center mt-12">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight  border-b-2 border-gray-500 pb-2">
          Award Function
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Celebrating Achievements and Memories
        </p>
      </div>

      <div className="gallery-page">
        <div className="modern-gallery-page min-h-screen bg-yellow-50">
          <section className="gallery-grid container mx-auto mt-16 px-4 ">
            <h1 className="text-2xl mb-5 md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-green-400">
              2022 Award Function Memories
            </h1>
            <div className="grid grid-cols-1 mb-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div key={index}>
                  <div
                    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-all duration-300 transform group-hover:scale-105 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-80 transition-colors duration-300">
                        View Larger
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Modal for full-size image */}
          {showModal && selectedIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
              <button
                className="absolute top-2 right-2 bg-white text-black p-2 rounded-full text-2xl"
                onClick={closeModal}
              >
                <AiOutlineCloseCircle />
              </button>
              <button
                className="absolute right-40  top-1/2 bg-white text-black text-xl px-4 py-2 rounded-full shadow-lg transform -translate-y-1/2"
                onClick={nextImage}
              >
                <GrChapterNext />
              </button>

              <button
                className="absolute left-40   top-1/2 bg-white text-black text-xl px-4 py-2 rounded-full shadow-lg transform -translate-y-1/2"
                onClick={previousImage}
              >
                <GrChapterPrevious />
              </button>
              <div className="relative">
                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].title}
                  className="max-w-full max-h-screen object-contain"
                />
                <button
                  className="absolute lg:hidden right-4 top-1/2 bg-gray-800 text-white text-xl px-4 py-2 rounded-full shadow-lg transform -translate-y-1/2"
                  onClick={nextImage}
                >
                  <GrChapterNext />
                </button>

                <button
                  className="absolute lg:hidden left-4 top-1/2 bg-gray-800 text-white text-xl px-4 py-2 rounded-full shadow-lg transform -translate-y-1/2"
                  onClick={previousImage}
                >
                  <GrChapterPrevious />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosGallery;
