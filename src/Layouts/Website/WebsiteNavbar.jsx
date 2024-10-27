import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for hamburger and close

export default function WebsiteNavbar({ routes }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [currentPageTitle, setCurrentPageTitle] = useState("");
  const [navHeight, setNavHeight] = useState("h-[3cm]");
  const [navColor, setNavColor] = useState("bg-black");
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  useEffect(() => {
    const currentRoute = routes.find((route) => isActive(route.path));
    if (currentRoute && currentRoute.path !== "/") {
      setCurrentPageTitle(currentRoute.label);
      setNavHeight("h-[8cm]");

      switch (currentRoute.path) {
        case "/about":
          setNavColor("bg-[#E23A53]");
          break;
        case "/gallery":
          setNavColor("bg-[#06B4DB]");
          break;
        case "/contact":
          setNavColor("bg-[#51B85D]");
          break;
        default:
          setNavColor("bg-black");
      }
    } else {
      setCurrentPageTitle("");
      setNavHeight("h-[3cm]");
      setNavColor("bg-black");
    }
  }, [location.pathname, routes]);

  return (
    <nav
      className={`${navColor} text-white text-2xl ${navHeight} transition-all duration-500`}
    >
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex pt-10 justify-between items-center">
          {/* Hamburger Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Centered Menu for Larger Screens */}
          <div className="hidden md:flex items-baseline space-x-8 justify-center w-full">
            {routes.map((route, index) => (
              <div key={index} className="relative group">
                {route.path ? (
                  <Link
                    to={route.path}
                    className={`${
                      isActive(route.path) ? "text-black" : "text-white"
                    } ${
                      index < 1 ? "text-lg" : "text-sm"
                    } uppercase transition-all duration-300 relative font-bold`}
                  >
                    {route.label}
                    <span className="absolute left-0 bottom-0 h-[3px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 transform origin-left"></span>
                  </Link>
                ) : (
                  <div className="cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium">
                    {route.label}
                    {route.submenu && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden group-hover:block z-50">
                        {route.submenu.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sub.path}
                            className={`${
                              isActive(sub.path)
                                ? "bg-gray-400 text-black"
                                : "hover:text-white hover:bg-black text-black"
                            } block px-4 py-2 font-bold text-lg`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Slide-in Mobile Menu */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-75 z-50 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 md:hidden`}
          >
            <div className="p-6 w-64 bg-black h-full">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none mb-6"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {routes.map((route, index) => (
                <div key={index} className="mb-4">
                  {route.path ? (
                    <Link
                      to={route.path}
                      onClick={() => setIsOpen(false)} // Close menu on link click
                      className={`${
                        isActive(route.path)
                          ? "bg-gray-900 text-yellow-400"
                          : "text-white hover:bg-gray-700"
                      } block px-3 py-2 rounded-md text-base font-medium`}
                    >
                      {route.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="w-full text-left text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
                      >
                        {route.label}
                      </button>
                      {/* Collapsible Submenu */}
                      {route.submenu && activeSubmenu === index && (
                        <div className="ml-4">
                          {route.submenu.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              to={sub.path}
                              onClick={() => setIsOpen(false)} // Close menu on link click
                              className={`${
                                isActive(sub.path)
                                  ? "bg-gray-900 text-yellow-400"
                                  : "text-gray-300 hover:bg-gray-700"
                              } block px-3 py-2 rounded-md text-sm`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb and Page Title */}
      {currentPageTitle && (
        <div className="w-screen h-[7cm] justify-start flex">
          <div className="w-[50%] h-[7cm] xs:pl-16 ">
            <div className="text-sm text-black mb-2 lg:ml-60 lg:mt-14 xs:mt-20 ">
              <Link to="/" className="underline">
                Home
              </Link>{" "}
              {">"} {currentPageTitle}
            </div>
            <div
              className="text-7xl font-extrabold relative lg:ml-60 text-black"
              style={{ fontFamily: "DynaPuff" }}
            >
              {currentPageTitle}
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <img
              src="images/aaa.png"
              className="lg:w-[15cm] lg:h-[5.5cm] xs:h-[5cm] xs:w-[10cm]  opacity-20 "
              alt=""
            />
          </div>
        </div>
      )}
    </nav>
  );
}
