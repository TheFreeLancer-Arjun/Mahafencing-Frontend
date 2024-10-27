import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function DistAwardeePlayerPage() {
  const [activeSection, setActiveSection] = useState("players"); // Default to players

  // Sample data for Players, Coaches, and Associates
  const players = [
    {
      srNo: 1,
      name: "UDAY PARMESHWAR DONGARE",
      dist: "CHH. SAMBHAJI NAGAR",
      year: "2004-05",
    },
    {
      srNo: 2,
      name: "KU. SHRUTI WAYDANDE",
      dist: "NASHIK",
      year: "2005-06",
    },
    // Add more rows as needed
  ];

  const coaches = [
    {
      srNo: 7,
      name: "UDAY PARMESHWAR DONGARE",
      dist: "CHH. SAMBHAJI NAGAR",
      year: "2004-05",
    },
    {
      srNo: 98,
      name: "KU. SHRUTI WAYDANDE",
      dist: "NASHIK",
      year: "2005-06",
    },
    // Add more rows as needed
  ];

  const associates = [
    {
      srNo: 49,
      name: "UDAY PARMESHWAR DONGARE",
      dist: "CHH. SAMBHAJI NAGAR",
      year: "2004-05",
    },
    {
      srNo: 70,
      name: "KU. SHRUTI WAYDANDE",
      dist: "NASHIK",
      year: "2005-06",
    },
    // Add more rows as needed
  ];

  return (
    <div className="bg-yellow-50">
      <div className="w-screen lg:flex lg:p-5 xs:p-1 ">
        {/* Sidebar */}
        <div className="lg:w-[30%] w-full flex flex-col gap-7 items-center pt-10">
          <span>
            <span>
              <span className="text-lg xs:text-base px-3  py-3 bg-white uppercase font-bold  border  border-b-[3px] border-r-[3px] border-black rounded-t-xl">
                Shiv Chhatrapati State Sports Award
              </span>
            </span>
          </span>

          <div className="flex flex-col gap-2 xs:mb-20">
            {/* Players Tab */}
            <Link
              to=""
              onClick={() => setActiveSection("players")}
              className={`px-10 text-lg font-bold border py-4 border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl ${
                activeSection === "players"
                  ? "bg-green-200 text-black"
                  : "bg-yellow-50 text-gray-600"
              }`}
            >
              Players
            </Link>
            {/* Coaches Tab */}
            <Link
              to=""
              onClick={() => setActiveSection("coaches")}
              className={`px-10 text-lg font-bold border py-4 border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl ${
                activeSection === "coaches"
                  ? "bg-green-200 text-black"
                  : "bg-yellow-50 text-gray-600"
              }`}
            >
              Coaches
            </Link>
            {/* Associates Tab */}
            <Link
              to=""
              onClick={() => setActiveSection("associates")}
              className={`px-10 text-lg font-bold border py-4 border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl ${
                activeSection === "associates"
                  ? "bg-green-200 text-black"
                  : "bg-yellow-50 text-gray-600"
              }`}
            >
              Associates
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-[70%] w-[100vw] lg:p-10 ">
          {/* Players Section */}
          {activeSection === "players" && (
            <div className="overflow-x-scroll">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="py-3 px-6 text-left">Sr. No.</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Dist.</th>
                    <th className="py-3 px-6 text-left">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((person, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } border-b border-gray-300`}
                    >
                      <td className="py-3 px-6">{person.srNo}</td>
                      <td className="py-3 px-6">{person.name}</td>
                      <td className="py-3 px-6">{person.dist}</td>
                      <td className="py-3 px-6">{person.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Coaches Section */}
          {activeSection === "coaches" && (
            <div className="overflow-x-scroll">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="py-3 px-6 text-left">Sr. No.</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Dist.</th>
                    <th className="py-3 px-6 text-left">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {coaches.map((person, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } border-b border-gray-300`}
                    >
                      <td className="py-3 px-6">{person.srNo}</td>
                      <td className="py-3 px-6">{person.name}</td>
                      <td className="py-3 px-6">{person.dist}</td>
                      <td className="py-3 px-6">{person.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Associates Section */}
          {activeSection === "associates" && (
            <div className="overflow-x-scroll">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="py-3 px-6 text-left">Sr. No.</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Dist.</th>
                    <th className="py-3 px-6 text-left">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {associates.map((person, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } border-b border-gray-300`}
                    >
                      <td className="py-3 px-6">{person.srNo}</td>
                      <td className="py-3 px-6">{person.name}</td>
                      <td className="py-3 px-6">{person.dist}</td>
                      <td className="py-3 px-6">{person.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
