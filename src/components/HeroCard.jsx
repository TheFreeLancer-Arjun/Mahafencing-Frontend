import React from "react";

const HeroCard = ({ title, description }) => {
  return (
    <>
      <section className="hero-section relative">
        <img
          src="/images/banner.webp"
          alt="College Campus"
          className="w-full lg:h-[7cm] object-cover xs:h-[7cm]"
        />
        <div className="hero-text absolute inset-0  flex flex-col items-center justify-center text-center bg-black bg-opacity-60 p-4">
          <h2 className="lg:text-4xl xs:text-3xl font-bold text-white mb-3 uppercase max-w-[90%] lg:max-w-[70%]">
            {title}
          </h2>
          <h1 className="lg:text-3xl xs:text-lg font-light text-white uppercase max-w-[90%] lg:max-w-[70%]">
            Maharashtra Fencing Association
          </h1>
          <p className="text-white lg:text-lg xs:text-sm lg:mt-5 xs:mt-3 max-w-[90%] lg:max-w-[70%] break-words">
            {description}
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
