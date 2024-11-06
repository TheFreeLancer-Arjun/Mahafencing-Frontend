import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="mt-20">
      <div class="flex  flex-wrap justify-center gap-10">
        <Link to={"/"}>
          <a class="relative" href="#">
            <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
            <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
              Website Page
            </span>
          </a>
        </Link>
        <Link to={"/admin/home-slider"}>
          <a href="#" class="relative">
            <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
            <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
              Admin Home
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Logout;
