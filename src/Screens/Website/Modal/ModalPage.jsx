// import React, { useState, useEffect } from "react";

// const ModalPage = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     // Automatically show modal on page load
//     setIsOpen(true);
//   }, []);

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//           {/* Modal Container */}
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             {/* Modal Header */}
//             <div className="flex justify-between items-center border-b pb-2">
//               <h2 className="text-xl font-bold">
//                 Welcome to Shri Chhatrapati Shivaji College of Pharmacy
//               </h2>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-gray-900"
//               >
//                 &times;
//               </button>
//             </div>
//             {/* Modal Body */}
//             <div className="mt-4">
//               <p className="text-gray-700">
//                 Here is important information about our programs!
//               </p>
//               <img
//                 src="https://www.shivajipharma.com/assets/img/ad-banner.jpeg"
//                 alt=""
//               />
//             </div>
//             {/* Modal Footer */}
//             <div className="mt-6 text-right">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-gray-900 text-white rounded-lg"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ModalPage;
