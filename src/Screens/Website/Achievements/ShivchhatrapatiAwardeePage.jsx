import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function ShivchhatrapatiAwardeePage() {
  const [activeSection, setActiveSection] = useState("players");

  const awardData = {
    players: [
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "EHFAZ QURESHI",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "SHWETA CHANDALIYA CHANDALIYA",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "SARIKA CHAURE",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "TANUJA PATEL",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "VAIDEHI LOHIYA",
        location: "CHH. SAMBHAJI NAGAR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "JAY SHARMA",
        location: "NASHIK",
      },
    ],
    coaches: [
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "EHFAZ QURESHI",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "JAY SHARMA",
        location: "NASHIK",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "SHWETA CHANDALIYA",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "SARIKA CHAURE",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "TANUJA PATEL",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "VAIDEHI LOHIYA",
        location: "CHH. SAMBHAJI NAGAR",
      },
    ],
    associates: [
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "SARIKA CHAURE",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "JAY SHARMA",
        location: "NASHIK",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "EHFAZ QURESHI",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "SHWETA CHANDALIYA",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "TANUJA PATEL",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "VAIDEHI LOHIYA",
        location: "CHH. SAMBHAJI NAGAR",
      },
    ],
    rajmatajijau: [
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "EHFAZ QURESHI",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "SHWETA CHANDALIYA",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "SARIKA CHAURE",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "TANUJA PATEL",
        location: "NAGPUR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "VAIDEHI LOHIYA",
        location: "CHH. SAMBHAJI NAGAR",
      },
      {
        imageUrl: "https://wwd.com/wp-content/uploads/2024/08/Kim-Yeji-HED-1.jpg",
        name: "JAY SHARMA",
        location: "NASHIK",
      },
    ],
  };

  const Card = ({ imageUrl, name, location }) => (
    <div className="rounded-2xl shadow-lg w-60 my-5 overflow-hidden">
      <div className="rounded-2xl shadow-lg bg-white border-[2px] border-black overflow-hidden">
        <img
          className="w-72 h-60 object-cover object-center border border-white"
          src={imageUrl}
          alt={`${name}'s photo`}
        />
        <div className="text-center pt-4 bg-[#F6F2DF] text-black h-[4cm] border border-[#06B4DB] border-t-[10px] p-2">
          <span className="text-lg font-semibold px-1 py-2 bg-white border border-b-[3px] border-r-[3px] border-[#51B85D] rounded-t-xl line-clamp-1">
            {name}
          </span>
          <p className="mt-5 mx-5 text-sm font-semibold bg-white border py-2 border-b-[3px] border-r-[3px] border-black rounded-t-xl line-clamp-1">
            {location}
          </p>
        </div>
      </div>
    </div>
  );

  const sections = [
    { key: "players", label: "Awardee Players" },
    { key: "coaches", label: "Awardee Coaches" },
    { key: "associates", label: "Awardee Associates" },
    { key: "rajmatajijau", label: "Awardee Rajmata Jijau" },
  ];

  return (
    <div className="w-screen  bg-yellow-50">
      <div className="w-full px-4 lg:px-32 py-20">
        <h1
          className="text-4xl lg:text-9xl text-start mt-4 mb-4 font-bold uppercase"
          style={{ fontFamily: "CodeProBlack" }}
        >
          State Sports Award
        </h1>
        <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#E23A53] flex flex-col lg:flex-row">
          
          {/* STICKY SECTION START */}
          <div className="lg:w-[30%] w-full flex flex-col gap-7 items-center pt-10 sticky top-0">
            <span className="text-lg px-3 py-3 bg-white uppercase font-bold border border-b-[3px] border-r-[3px] border-black rounded-t-xl">
              Shiv Chhatrapati State Sports Award
            </span>
            <div className="flex flex-col gap-2">
              {sections.map((section) => (
                <Link
                  to="#"
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`px-10 text-lg font-bold border py-4 border-b-[3px] border-r-[3px] border-[#E23A53] rounded-t-xl ${
                    activeSection === section.key
                      ? "bg-[#E23A53] text-white"
                      : "bg-yellow-50"
                  }`}
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
          {/* STICKY SECTION END */}

          <div className="lg:w-[70%] w-full flex flex-wrap justify-center bg-yellow-50 p-5">
            <div className="flex flex-wrap gap-10 justify-center">
              {awardData[activeSection].map((user, index) => (
                <Card
                  key={index}
                  imageUrl={user.imageUrl}
                  name={user.name}
                  location={user.location}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
