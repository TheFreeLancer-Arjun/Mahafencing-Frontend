import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "./AdminRoutes";
import { FaTachometerAlt } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const closeSidebar = () => {
    toggleSidebar(false);
  };

  return (
    <nav
      className={`fixed z-20 w-64 h-full bg-white text-black transition-transform transform   border-r-[5px]     border-r-[black]  ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } sm:relative sm:translate-x-0 sm:w-64 sm:h-screen sm:block`}
    >
      <div className="flex items-center justify-center h-20  text-2xl font-bold mt-14">
        <Link to="/">
          <img src="http://mahafencing.in/assets/img/logo.png" alt="Logo" className="h-24 mr-8 " />
        </Link>
      </div>

      <ul className="p-4 space-y-2">
        {routes.map((route, index) => (
          <li key={index}>
            {route.subRoutes ? (
              <div
                className="flex items-center justify-between cursor-pointer bg-[] p-3 rounded-lg bg-yellow-100 transition duration-200 ease-in-out   border border-b-[5px] border-r-[5px] border-black    rounded-t-xl"
                onClick={() => toggleMenu(index)}
              >
                <div className="flex items-center">
                  {route.icon}
                  <span className="ml-2">{route.name}</span>
                </div>
              </div>
            ) : (
              <Link
                to={route.path}
                className="flex items-center  p-3 rounded-lg   bg-yellow-100 transition duration-200 ease-in-out   border border-b-[5px] border-r-[5px] border-black    rounded-t-xl"
                onClick={closeSidebar} // Close sidebar for main menu without submenus
              >
                {route.icon}
                <span className="ml-2">{route.name}</span>
              </Link>
            )}

            {route.subRoutes && (
              <ul
                className={`ml-6 mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                  openMenuIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {route.subRoutes.map((subRoute, subIndex) => (
                  <li
                    key={subIndex}
                    className=" p-3 rounded-lg mt-1   bg-yellow-100 transition duration-200 ease-in-out   border border-b-[5px] border-r-[5px] border-black    rounded-t-xl"
                  >
                    <Link
                      to={subRoute.path}
                      className="flex items-center"
                      onClick={closeSidebar} // Close sidebar when submenu is clicked
                    >
                      {subRoute.icon}
                      <span className="ml-2">{subRoute.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
