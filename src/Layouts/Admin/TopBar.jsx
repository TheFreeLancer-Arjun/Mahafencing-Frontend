import React from "react";
import { FaBars } from "react-icons/fa";

const TopBar = ({ userName, toggleSidebar }) => {
  return (
    <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4 shadow-md">
      <div className="text-xl font-bold">Admin Dashboard</div>

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
