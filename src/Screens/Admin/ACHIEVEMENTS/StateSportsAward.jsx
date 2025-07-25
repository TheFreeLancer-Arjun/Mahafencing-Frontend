import React, { useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { Link } from "react-router-dom";

const StateSportsAward = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      image: "https://www.shivajipharma.com/assets/img/goal.jpg",
      title: "Fresher Party",
      size: "large",
      name: "Default Name",
      location: "Default Location",
    },
  ]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [size, setSize] = useState("large");
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required.";
    if (!location.trim()) errors.location = "Location is required.";
    if (!image) errors.image = "Image is required.";
    else if (!/\.(jpg|jpeg|png|gif)$/i.test(image.name)) {
      errors.image = "Please upload a valid image file (jpg, jpeg, png, gif).";
    }
    return errors;
  };

  const addRow = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRow = {
      id: rows.length + 1,
      image: image ? URL.createObjectURL(image) : "",
      name,
      location,
      size,
    };

    setRows([...rows, newRow]);
    setImage(null);
    setName("");
    setLocation("");
    setSize("large");
    closeModal();
  };

  const deleteRow = (id) => {
    const filteredRows = rows.filter((row) => row.id !== id);
    setRows(filteredRows);
  };

  return (
    <>
      <div className="flex px-5 sm:px-7 justify-between items-center flex-wrap w-full">
        
        <h1 className="font-extrabold py-4 text-center text-2xl sm:text-4xl text-black flex items-center justify-center uppercase">
          Shiv Chhatrapati State Sports Award
        </h1>
        <Link>
          <button
            onClick={openModal}
            type="button"
            className="mt-4 px-4 py-2 bg-green-400 text-black rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-gray-500 border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
          >
            Add State Award
          </button>
        </Link>
      </div>

      <div className="container mx-auto p-4 sm:p-6">
        <div className="bg-white shadow-lg rounded-lg p-4 sm:w-[100%] lg:w-[80vw]">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-2 sm:px-4 py-2 text-left">Sr. No</th>
                  <th className="px-2 sm:px-4 py-2 text-left">Images</th>
                  <th className="px-2 sm:px-4 py-2 text-left">Name</th>
                  <th className="px-2 sm:px-4 py-2 text-left">Location</th>
                  <th className="px-2 sm:px-4 py-2 text-left">Size</th>
                  <th className="px-2 sm:px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className="bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <td className="border px-2 sm:px-4 py-2">{index + 1}</td>
                    <td className="border px-2 sm:px-4 py-2">
                      <img
                        src={row.image}
                        alt="Uploaded"
                        className="h-16 w-20 sm:h-20 sm:w-24 object-cover rounded-md shadow"
                      />
                    </td>
                    <td className="border px-2 sm:px-4 py-2">{row.name}</td>
                    <td className="border px-2 sm:px-4 py-2">{row.location}</td>
                    <td className="border px-2 sm:px-4 py-2">{row.size}</td>
                    <td className="border px-2 sm:px-4 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => deleteRow(row.id)}
                        className="px-2 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
                      >
                        Delete State Award
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-yellow-50 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl text-center font-semibold text-gray-700">
                Add State Award
              </h2>
              <button
                className="text-gray-500 font-bold hover:text-gray-700"
                onClick={closeModal}
              >
                &#x2715;
              </button>
            </div>
            <form className="space-y-4" onSubmit={addRow}>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter location"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Upload Featured Image
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="block w-full"
                />
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Select Size
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="player">Player</option>
                  <option value="coaches">Coaches</option>
                  <option value="associates">Associates</option>
                  <option value="rajmata jijau">Rajmata Jijau</option>
                </select>
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-green-400 text-black rounded-md hover:bg-green-500 w-full border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
              >
                Save State Award
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StateSportsAward;
