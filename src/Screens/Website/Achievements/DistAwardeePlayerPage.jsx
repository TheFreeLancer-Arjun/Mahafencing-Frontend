import React, { useState } from "react";
import { Link } from "react-router-dom";

const DistAwardeePlayerPage = () => {
  const [activeSection, setActiveSection] = useState("players");

  const players = [
    { srNo: 1, name: "UDAY PARMESHWAR DONGARE", dist: "CHH. SAMBHAJI NAGAR", year: "2004-05" },
    { srNo: 2, name: "KU. SHRUTI WAYDANDE", dist: "NASHIK", year: "2005-06" },
  ];

  const coaches = [
    { srNo: 7, name: "UDAY PARMESHWAR DONGARE", dist: "CHH. SAMBHAJI NAGAR", year: "2004-05" },
    { srNo: 98, name: "KU. SHRUTI WAYDANDE", dist: "NASHIK", year: "2005-06" },
  ];

  const associates = [
    { srNo: 49, name: "UDAY PARMESHWAR DONGARE", dist: "CHH. SAMBHAJI NAGAR", year: "2004-05" },
    { srNo: 70, name: "KU. SHRUTI WAYDANDE", dist: "NASHIK", year: "2005-06" },
  ];

  const sectionData = {
    players,
    coaches,
    associates,
  };

  const renderTable = (data) => (
    <div className="overflow-x-auto rounded-3xl">
      <table className="min-w-full bg-white border border-gray-300 rounded-2xl">
        <thead>
          <tr className="bg-black text-white rounded-2xl">
            <th className="py-3 px-6 text-left">Sr. No.</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Dist.</th>
            <th className="py-3 px-6 text-left">Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} border-b border-gray-300`}
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
  );

  return (
    <div className="bg-yellow-50 min-h-screen">
      <div className="w-full px-4 lg:px-32 py-20">
        <h1
          className="text-4xl lg:text-9xl font-bold uppercase mb-10"
          style={{ fontFamily: "CodeProBlack" }}
        >
          Dist Sports Award
        </h1>

        <div className="flex flex-col lg:flex-row border-t-[15px] border-r-[15px] rounded-2xl border-[#E23A53] p-4 gap-8">
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col items-center gap-4 pt-5">
            <span className="text-lg xs:text-base px-3 py-3 bg-white font-bold uppercase border border-b-[3px] border-r-[3px] border-black rounded-t-xl">
              Shiv Chhatrapati Dist Sports Award
            </span>

            {["players", "coaches", "associates"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`w-[6cm] text-center text-lg font-bold px-10 py-4 border border-b-[3px] border-r-[3px] border-[#E23A53] rounded-t-xl ${
                  activeSection === section ? "bg-[#E23A53] text-black" : "bg-yellow-50 text-gray-600"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Table Section */}
          <div className="w-full lg:w-2/3 p-4">
            {renderTable(sectionData[activeSection])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistAwardeePlayerPage;
