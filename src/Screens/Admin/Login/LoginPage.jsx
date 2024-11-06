import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroCard from "../../../components/HeroCard";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to admin page
    navigate('/admin');
  };

  return (
    <>
   
      <div className="min-h-screen bg-yellow-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
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
          Mahafencing Association
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 sm:px-10">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <FaUser className="absolute text-gray-700 left-3 top-3" />
                  <input
                    id="email"
                    name="username"
                    placeholder="user@example.com"
                    type="email"
                    required
                    value={formData.username}
                    onChange={handleInput}
                    className="w-full pl-10 pr-4 py-3 border border-b-[5px] border-r-[5px] border-[#06B4DB] rounded-t-xl"
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
                  <RiLockPasswordFill className="absolute text-gray-700 left-3 top-3" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    required
                    value={formData.password}
                    onChange={handleInput}
                    className="w-full pl-10 pr-4 py-3 rounded-lg   border border-b-[5px] border-r-[5px] border-[#06B4DB] rounded-t-xl"
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
                  <button
                    type="submit"
                    className="text-black hover:bg-green-200 text-lg md:text-xl font-semibold px-6  md:px-8 py-2 bg-white border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
                  >
                    Sign in
                  </button>
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
