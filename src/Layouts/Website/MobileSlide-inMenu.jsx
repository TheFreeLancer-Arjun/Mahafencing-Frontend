import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import React from "react";

export default function SidebarMenu({ routes, isOpen, toggleMenu, activeSubmenu, toggleSubmenu, isActive, setIsOpen }) {
  return (
    <div className="p-6 max-w-[100vw] h-full bg-black">
      <div className="w-full flex justify-end items-end mt-10">
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
                  ? "bg-yellow-900 underline"
                  : "text-white hover:bg-yellow-700"
              }`}
            >
              <div>
                <h1
                  style={{ fontFamily: "CodeProBlack" }}
                  className="cursor-pointer text-2xl md:text-3xl xl:text-4xl font-extrabold"
                >
                  {route.label}
                </h1>
                <span className="absolute left-0 bottom-[-4px] h-[5px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </div>
            </Link>
          ) : (
            <div>
              <button
                onClick={() => toggleSubmenu(index)}
                className="w-full text-left text-white hover:bg-yellow-700 px-3 py-2 rounded-md font-medium"
              >
                <h1
                  style={{ fontFamily: "CodeProBlack" }}
                  className="cursor-pointer text-2xl md:text-3xl xl:text-4xl font-extrabold"
                >
                  {route.label}
                </h1>
              </button>

              {route.submenu && activeSubmenu === index && (
                <div className="ml-4 mt-2">
                  {route.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sub.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm ${
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
  );
}
