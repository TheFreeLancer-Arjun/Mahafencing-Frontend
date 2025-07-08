import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function WebsiteNavbar({ routes }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [currentPageTitle, setCurrentPageTitle] = useState("");
  const [navHeight, setNavHeight] = useState("min-h-[3cm] h-[12vh]");
  const [navColor, setNavColor] = useState("bg-black");
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  useEffect(() => {
    const currentRoute = routes.find((route) => isActive(route.path));
    if (currentRoute && currentRoute.path !== "/") {
      setCurrentPageTitle(currentRoute.label);
      setNavHeight("min-h-[10.4cm] h-[40vh]");

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
      setNavHeight("min-h-[4cm] h-[15vh]");
      setNavColor("bg-black");
    }
  }, [location.pathname, routes]);

  const staticLinks = [
    { path: "/about", label: "ABOUT" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className={`${navColor} text-white ${navHeight} transition-all duration-500`}>
      <div className="w-full flex justify-center items-center">
        {/* Top Navbar */}
        <div className="flex w-full">
          {/* Logo */}
          <div className="w-[50%] lg:w-[15%] flex justify-center items-center text-2xl font-bold uppercase">
            <Link to="/">
              <img
                className="w-[3cm] h-[3cm] object-contain max-w-[80vw] max-h-[80vw]"
                src="https://www.mahafencing.in/images/big_logo.png?v=1748147038"
                alt="logo"
              />
            </Link>
          </div>

          {/* Desktop Static Links */}
          <div className="hidden w-[45%] lg:flex justify-center items-center gap-8 uppercase font-bold text-lg relative mt-10">
            {staticLinks.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link
                  to={item.path}
                  style={{ fontFamily: "CodeProBlack" }}
                  className="cursor-pointer text-2xl md:text-3xl xl:text-4xl font-extrabold"
                >
                  {item.label}
                </Link>
                <span className="absolute left-0 bottom-[-4px] h-[5px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </div>
            ))}
          </div>

          {/* Desktop Dropdown Links */}
          <div className="hidden w-[45%] lg:flex justify-end pr-2 items-center text-sm mt-10">
            {routes
              .filter((route) => route.subroute)
              .map((route, index) => (
                <div key={index} className="relative group">
                  <div className="cursor-pointer px-3 py-2 text-sm">
                    <h1 className="text-[16px] font-semibold hover:text-gray-400">
                      {route.label}
                    </h1>
                    <div className="absolute left-0 mt-2 w-48 bg-black/90 rounded-2xl shadow-md py-2 hidden group-hover:block z-50 overflow-hidden">
                      {route.subroute.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sub.path}
                          className={`block px-4 py-2 text-[16px] font-semibold ${
                            isActive(sub.path)
                              ? "bg-[#FEFCE8] text-black"
                              : "text-white hover:bg-[#FDE047] hover:text-black"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            <Link
              className="font-semibold ml-4"
              to="https://register.mahafencing.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DepartmentLogin
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden p-4 mt-10">
          <button onClick={toggleMenu} className="text-white">
            <FiMenu size={40} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="p-6 max-w-[100vw]  bg-black overflow-y-auto h-screen">
          <div className="w-full flex justify-end mt-10">
            <button onClick={toggleMenu} className="text-white mb-6">
              <FiX size={40} />
            </button>
          </div>

          {routes.map((route, index) => (
            <div key={index} className="mb-4">
              {route.path ? (
                <Link
                  to={route.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    isActive(route.path)
                      ? " underline"
                      : ""
                  }`}
                >
                  <h1
                    style={{ fontFamily: "CodeProBlack" }}
                    className="cursor-pointer text-3xl font-extrabold"
                  >
                    {route.label}
                  </h1>
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className=" w-full text-left text-white  px-3 py-2 rounded-md font-medium"
                  >
                  <h1 className="text-xl">
                      {route.label}
                  </h1>
                  </button>
                  {route.subroute && activeSubmenu === index && (
                    <div className="ml-4">
                      {route.subroute.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm ${
                            isActive(sub.path)
                              ? "underline"
                              :""
                          }`}
                        >
                       <h1 className="text-lg ">
                           {sub.label}
                       </h1>
                        </Link>
                      ))}
                    </div>
                   
                  )}
                 
                </div>
              )}
            </div>
          ))}
             <h1>
                        <Link
              className="text-xl ml-3"
              to="https://register.mahafencing.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DepartmentLogin
            </Link>
                    </h1>
        </div>
       
      </div>

      {/* Page Title & Breadcrumb */}
      {currentPageTitle && (
        <div className="w-full flex flex-col md:flex-row justify-center items-center  p-2">
          <div className="w-full md:w-1/2">
            <div className="text-white mb-4 ml-5 flex justify-start items-center gap-2 mt-20">
              <Link to="/">Home</Link>
              <FaArrowAltCircleRight />
              <span className="lowercase">{currentPageTitle}</span>
            </div>
            <div
              className="text-7xl md:text-8xl xl:text-9xl font-extrabold break-words  lg:mb-20 ml-4"
              style={{ fontFamily: "CodeProBlack" }}
            >
              {currentPageTitle}
            </div>
          </div>

          <div className=" w-full flex justify-center items-center  md:mt-0   ">
            <img
              src="https://olympic.org.nz/images/masks/niho-tangata.svg"
              alt="Decoration"
              className="h-[81px] sm:h-[200px] md:h-[250px] lg:h-[300px] opacity-50  lg:mt-8 "
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
