// import React from "react";

// export default function LoginPage() {
//   return (
//     <div>
//       <div className="flex flex-col md:flex-row h-screen bg-gray-100">
//         {/* Left Section: Image */}
//         <div className="md:w-1/2 w-full relative">
//           <img
//             src="https://www.shivajipharma.com/assets/image_gallery/1.jpeg"
//             alt="Fencing Event"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <h1 className="text-white text-4xl font-bold text-center">
//               Maharashtra Fencing Association
//             </h1>
//           </div>
//         </div>

//         {/* Right Section: Signup Form */}
//         <div className="md:w-1/2 w-full flex flex-col justify-center p-8 md:p-16">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
//             Join Us Today!
//           </h2>

//           {/* Signup Form */}
//           <form className="space-y-6">
//             {/* Name Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                 placeholder="Enter your full name"
//                 required
//               />
//             </div>

//             {/* Email Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             {/* Phone Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                 placeholder="Enter your phone number"
//                 required
//               />
//             </div>

//             {/* Password Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-teal-500 text-white p-3 rounded-md font-semibold shadow-md hover:bg-teal-600 transition duration-300"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>

//           {/* Already have an account */}
//           <p className="text-center text-gray-600 mt-6">
//             Already a member?{" "}
//             <a href="#" className="text-teal-500 hover:underline">
//               Login here
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
