import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function ShivchhatrapatiAwardeePage() {
  const [activeSection, setActiveSection] = useState("players"); // Default to players

  const players = [
    {
      imageUrl: "http://mahafencing.in/assets/img/all/Quarishi.jpg",
      name: "EHFAZ QURESHI",
      location: "NAGPUR",
    },
    // Add more player objects as needed
  ];

  const coaches = [
    {
      imageUrl: "http://mahafencing.in/assets/img/coach/uday.jpg",
      name: "DR.UDAY DONGARE",
      location: "AURANGABAD",
    },
    // Add more coach objects as needed
  ];

  const associates = [
    {
      imageUrl: "http://mahafencing.in/assets/img/all/Dilip%20Ghodke.jpg",
      name: "MR. DILIP GHODKE",
      location: "AHEMADNAGAR",
    },
    // Add more associate objects as needed
  ];

  const rajmatajijau = [
    {
      imageUrl: "http://mahafencing.in/assets/img/asso/sangita.jpg",
      name: "SANGITA YEVATIKAR",
      location: "AMARAVATI",
    },
    {
      imageUrl: "http://mahafencing.in/assets/img/asso/sangita.jpg",
      name: "SANGITA YEVATIKAR",
      location: "AMARAVATI",
    },
    {
      imageUrl: "http://mahafencing.in/assets/img/asso/sangita.jpg",
      name: "SANGITA YEVATIKAR",
      location: "AMARAVATI",
    },
    // Add more objects as needed
  ];

  const Card = ({ imageUrl, name, location }) => (
    <div className="rounded-2xl shadow-lg overflow-hidden w-60 my-5 p-1">
      {/* Single card */}
      <div className="rounded-2xl shadow-lg overflow-hidden p-1 duration-300 ease-in-out bg-white border-[2px] border-black">
        <img
          className="w-72 h-60 object-cover object-center border border-white"
          src={imageUrl} // Replace with your image URL
          alt="Profile"
        />
        <div className="text-center pt-4 bg-[#F6F2DF] text-black h-[4cm] border border-[#06B4DB] border-t-[10px]">
          <span className="text-xl font-semibold px-1 py-2 bg-white border border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl">
            {name}
          </span>
          <p className="mt-5 mx-5 text-sm font-semibold bg-white border py-2 border-b-[3px] border-r-[3px] border-black rounded-t-xl">
            {location}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="w-screen p-5 lg:flex bg-yellow-50">
        <div className="lg:w-[30%] w-full flex flex-col gap-7 text-black items-center pt-10 ">
          <span className="text-lg xs:text-base px-3   py-3 bg-white uppercase font-bold  border  border-b-[3px] border-r-[3px] border-black rounded-t-xl">
            Shiv Chhatrapati State Sports Award
          </span>

          <div className="flex flex-col gap-2  ">
            <Link
              to=""
              onClick={() => setActiveSection("players")}
              className={`px-10 text-lg font-bold border py-4 border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl ${
                activeSection === "players" ? "bg-green-200" : "bg-yellow-50"
              }`}
            >
              Awardee Players
            </Link>
            <Link
              to=""
              onClick={() => setActiveSection("coaches")}
              className={`px-10 text-lg font-bold border py-4 border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl ${
                activeSection === "coaches" ? "bg-green-200" : "bg-yellow-50"
              }`}
            >
              Awardee Coaches
            </Link>
            <Link
              to=""
              onClick={() => setActiveSection("associates")}
              className={`px-10 text-lg font-bold border py-4 border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl ${
                activeSection === "associates" ? "bg-green-200" : "bg-yellow-50"
              }`}
            >
              Awardee Associates
            </Link>
            <Link
              to=""
              onClick={() => setActiveSection("rajmatajijau")}
              className={`px-10 text-lg font-bold border py-4 border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl ${
                activeSection === "rajmatajijau"
                  ? "bg-green-200"
                  : "bg-yellow-50"
              }`}
            >
              Awardee Rajmata Jijau
            </Link>
          </div>
        </div>
        <div className="lg:w-[70%] w-full flex flex-wrap bg-yellow-50 p-5">
          <div className="flex flex-wrap gap-10 justify-center">
            {activeSection === "players" &&
              players.map((user, index) => (
                <Card
                  key={index}
                  imageUrl={user.imageUrl}
                  name={user.name}
                  location={user.location}
                />
              ))}
            {activeSection === "coaches" &&
              coaches.map((user, index) => (
                <Card
                  key={index}
                  imageUrl={user.imageUrl}
                  name={user.name}
                  location={user.location}
                />
              ))}
            {activeSection === "associates" &&
              associates.map((user, index) => (
                <Card
                  key={index}
                  imageUrl={user.imageUrl}
                  name={user.name}
                  location={user.location}
                />
              ))}
            {activeSection === "rajmatajijau" &&
              rajmatajijau.map((user, index) => (
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
  );
}
