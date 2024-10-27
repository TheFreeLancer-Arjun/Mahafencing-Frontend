import React from "react";
import HeroCard from "../../../components/HeroCard";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <HeroCard title={"Please log In"} />
      <div className="min-h-screen bg-[#ebf4ff] flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto "
            src="https://www.svgrepo.com/show/301692/login.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-black font-bold max-w">
            Shri Chhatrapati Shivaji College of Pharmacy
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-4  sm:px-10">
            <form>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <FaUser className="absolute textred left-3 top-3 text-[#1f2937]" />
                  <input
                    id="email"
                    name="email"
                    placeholder="user@example.com"
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  {" "}
                  {/* Add relative here */}
                  <RiLockPasswordFill className="absolute text-gray-700 left-3 top-3" />{" "}
                  {/* Correct color class */}
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember"
                    type="checkbox"
                    value="1"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm leading-5 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-5">
                  <span className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Forgot your password?
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                 <Link to="/admin/dashboard">
                 <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900"
                  >
                    Sign in
                  </button>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
