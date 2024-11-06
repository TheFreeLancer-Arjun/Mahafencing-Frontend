import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function WebsiteNavbar({ routes }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [currentPageTitle, setCurrentPageTitle] = useState("");
  const [navHeight, setNavHeight] = useState("h-[4cm]");
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
      setNavHeight("h-[10.4cm]");

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
          setNavColor("bg-[#3A302D]");
      }
    } else {
      setCurrentPageTitle("");
      setNavHeight("h-[4cm]");
      setNavColor("bg-black");
    }
  }, [location.pathname, routes]);

  return (
    <nav
      className={`${navColor} text-white text-2xl ${navHeight} transition-all duration-500  `}
    >
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pt-10">
          {/* Logo Section */}
          <div className="flex items-center ">
            <Link to="/">
              <img src="./images/logo.png" alt="Logo" className="lg:h-24 mr-8 xs:h-16  " />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Centered Menu for Larger Screens */}
          <div className="hidden md:flex items-baseline space-x-10 justify-center w-full mb-8">
            {routes.map((route, index) => (
              <div key={index} className="relative group">
                {route.path ? (
                  <Link
                    to={route.path}
                    className={`${
                      isActive(route.path) ? "text-black" : "text-white"
                    } ${
                      ["ABOUT", "GALLERY", "CONTACT"].includes(route.label)
                        ? "text-2xl"
                        : "text-sm text-center"
                    } transition-all duration-300 relative font-bold`}

                    style={{
                      fontWeight: "900",
                      fontFamily: "DynaPuff",
                    }}
                  >
                    {route.label}
                    <span className="absolute left-0 bottom-0 h-[3px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 transform origin-left"></span>
                  </Link>
                ) : (
                  <div className="cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium text-sm">
                    {route.label}
                    {route.submenu && (
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 hidden group-hover:block z-50">
                        {route.submenu.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sub.path}
                            className={`block px-4 py-2 font-bold text-lg  ${
                              subIndex !== 0 ? "mt-2" : ""
                            } ${
                              isActive(sub.path)
                                ? "bg-gray-200 text-black"
                                : "hover:text-black hover:bg-gray-100 text-black"
                            }`}
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

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#3A302D] bg-opacity-75 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="p-6 w-64 bg-[#3A302D] h-full">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none mb-6"
          >
            <FiX size={24} />
          </button>
          {routes.map((route, index) => (
            <div key={index} className="mb-4">
              {route.path ? (
                <Link
                  to={route.path}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  className={`${
                    isActive(route.path)
                      ? "bg-yellow-900 text-green-300"
                      : "text-white hover:bg-yellow-700"
                  } block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {route.label}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="w-full text-left text-white hover:bg-yellow-700 px-3 py-2 rounded-md text-base font-medium"
                  >
                    {route.label}
                  </button>
                  {route.submenu && activeSubmenu === index && (
                    <div className="ml-4">
                      {route.submenu.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sub.path}
                          onClick={() => setIsOpen(false)} // Close menu on link click
                          className={`block px-3 py-2 rounded-md text-sm ${
                            subIndex !== 0 ? "mt-2" : ""
                          } ${
                            isActive(sub.path)
                              ? "bg-yellow-900 text-green-300"
                              : "text-yellow-300 hover:bg-yellow-700"
                          }`}
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

      {/* Breadcrumb and Page Title */}
      {currentPageTitle && (
        <div className="w-screen h-[7cm] justify-start flex">
          <div className="w-[50%] h-[7cm] xs:pl-9">
            <div className="text-sm text-black mb-8 lg:ml-14 lg:mt-14 xs:mt-20">
              <Link to="/" className="underline">
                Home
              </Link>{" "}
              {">"} {currentPageTitle}
            </div>
            <div
              className="text-8xl xs:text-7xl  ml-2 font-extrabold relative lg:ml-12 text-black"
              style={{ fontFamily: "DynaPuff" }}
            >
              {currentPageTitle}
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <img
              src="images/aaa.png"
              className="lg:w-[15cm] lg:h-[5.5cm] xs:h-[5cm] xs:w-[10cm] opacity-20"
              alt=""
            />
          </div>
        </div>
      )}
    </nav>
  );
}
