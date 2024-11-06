import React from "react";
import { FaBars } from "react-icons/fa";

const TopBar = ({ userName, toggleSidebar, dashboardTitle }) => {
  return (
    <div className="w-full h-16 bg-black text-white flex items-center justify-between px-4 shadow-md      border-[5px] border-[#ffffff]">
      <div className="text-xl font-bold">name</div>

      <div className="flex items-center space-x-4">
        <div className="text-lg">Hi, {userName}</div>
        {/* Hamburger Icon for small screens */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <FaBars className="text-xl" />
        </button>

        {/* User greeting */}
      </div>
    </div>
  );
};

export default TopBar;
