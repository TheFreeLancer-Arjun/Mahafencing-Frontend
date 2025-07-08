import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarouselPage from "./CarouselPage";
import HomePageFeatures from "./HomePageFeatures";
import PageFeatures from "./PageFeatures";

import {
  notices,
  newsScroll,
  ourInspirations,
  ourOfficeBearers,
} from "../../../data/HomePage";
import { Link } from "react-router-dom";
import Latest_news from "./Latest_news";
import ScrollingNews from "./component/ScrollingNews";
import NumberStats from "./component/NumberStats";
import GALLERY from "./component/GALLERY";
import Hero from "./component/Hero";
import MobileCard from "./component/MobileCard";



export default function HomePage() {
    const data = [
    {
      id: 1,
      image: "http://mahafencing.in/assets/inaugration/b%20(2).jpeg",
      title:
        "Shri Chhatrapati Shivaji Maharaj established Swaraj (Own Kingdom)",
      size: "large",
    },
    {
      id: 2,
      image: "http://mahafencing.in/assets/inaugration/b%20(4).jpeg",
      title: "State tournaments are organized every year in under ten",
      size: "large",
    },
    {
      id: 3,
      image: "http://mahafencing.in/assets/inaugration/b%20(1).jpeg",
      title:
        "Spreading and propagating the sword in Maharashtra began to overcome many obstacles.",
      size: "small",
    },
    {
      id: 4,
      image: "http://mahafencing.in/assets/inaugration/b%20(3).jpeg",
      title:
        "Fencing is being played in all the districts of Maharashtra today and Maharashtra fencing association has more than fifteen thousand registered players.",
      size: "small",
    },
    {
      id: 5,
      image: "http://mahafencing.in/assets/inaugration/b%20(5).jpeg",
      title:
        "Fencing is being played in all the districts of Maharashtra today and Maharashtra fencing association has more than fifteen thousand registered players.",
      size: "small",
    },
    {
      id: 6,
      image: "http://mahafencing.in/assets/inaugration/b%20(6).jpeg",
      title:
        "Spreading and propagating the sword in Maharashtra began to overcome many obstacles.",
      size: "small",
    },
  ];

 

  const marqueeRef = useRef(null);

  const handleMarqueeEnter = () => marqueeRef.current.stop();
  const handleMarqueeLeave = () => marqueeRef.current.start();

  return (
    <>
      <div className=" bg-yellow-50 ">

      
        {/* Carousel */}
        <CarouselPage />


        {/* Scrolling News Section */}
       
<ScrollingNews/>


        {/* Content Section */}
     <Hero/>

<Latest_news/>
        {/* Inspirations Section */}



        <NumberStats/>
<HomePageFeatures title=" Our Leadership" columns={2} />

        <PageFeatures />

      <GALLERY/>

        <div className="bg-[#130C0E]">
          <section
            className="lg:h-[70vh] w-screen bg-[#292426]    py-16 bg-cover bg-center flex justify-center items-center  flex-col"
            style={{
              backgroundImage:
                "url('https://olympic.org.nz/images/rangipapa.svg')",
            }}
          >
            <h2
             style={{
              fontFamily: "CodeProBlack",
            }}
              className="text-9xl  font-bold mt-5 mb-5 text-white  "
             
            >
              STAY UPDATED
            </h2>

            <h1 className="text-center  text-xl text-gray-400">
           Subscribe To Get The Latest Updates On The NZ Team
            </h1>

            <Link
              to="/contact"
              type="submit"
              className="text-black  mt-5  hover:bg-[#130C0E]/50  hover:text-white text-lg md:text-xl font-semibold px-6 md:px-8 py-2 bg-white border-2 border-b-[5px] border-r-[5px] border-[#130C0E] rounded-t-xl"
            >
              Send Message
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
