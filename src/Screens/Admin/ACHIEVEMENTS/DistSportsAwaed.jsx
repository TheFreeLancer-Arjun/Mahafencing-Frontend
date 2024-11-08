import React, { useState } from "react";
import { Link } from "react-router-dom";

const DistSportsAward = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      title: "Fresher Party",
      size: "large",
      name: "Default Name",
      location: "Default Location",
      year: "2023",
    },
  ]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [year, setYear] = useState("");
  const [size, setSize] = useState("large");
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required.";
    if (!location.trim()) errors.location = "Location is required.";
    if (!year.trim()) errors.year = "Year is required.";
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
      name,
      location,
      year,
      size,
    };

    setRows([...rows, newRow]);
    setName("");
    setLocation("");
    setYear("");
    setSize("large");
    closeModal();
  };

  const deleteRow = (id) => {
    const filteredRows = rows.filter((row) => row.id !== id);
    setRows(filteredRows);
  };

  return (
    <>
      <div className="flex px-4 md:px-7 justify-between items-center flex-wrap w-full">
        <h1 className="font-extrabold py-4 text-center text-3xl md:text-4xl text-black flex items-center justify-center">
          Shiv Chhatrapati Dist Sports Award
        </h1>
        <Link>
          <button
            onClick={openModal}
            type="button"
            className="mt-4 px-3 py-2 bg-green-400 text-black rounded-md border border-b-[3px] border-r-[3px] border-black md:border-b-[5px] md:border-r-[5px] rounded-t-xl"
          >
            Add Dist Sports Award
          </button>
        </Link>
      </div>

      <div className="container p-4 md:p-6">
        <div className="bg-white shadow-lg rounded-lg p-4 md:w-[80vw] w-full overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr. No</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Year</th>
                <th className="px-4 py-2 text-left">Size</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.id} className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{row.name}</td>
                  <td className="border px-4 py-2">{row.location}</td>
                  <td className="border px-4 py-2">{row.year}</td>
                  <td className="border px-4 py-2">{row.size}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      type="button"
                      onClick={() => deleteRow(row.id)}
                      className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 border border-b-[3px] border-r-[3px] border-black md:border-b-[5px] md:border-r-[5px] rounded-t-xl"
                    >
                      Delete Album
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 md:p-0">
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-center font-semibold text-gray-700">Add Album</h2>
              <button className="text-gray-500 font-bold hover:text-gray-700" onClick={closeModal}>
                &#x2715;
              </button>
            </div>
            <form className="space-y-4" onSubmit={addRow}>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter location"
                />
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Year</label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter year"
                />
                {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Select Size</label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="player">Player</option>
                  <option value="coaches">Coaches</option>
                  <option value="associates">Associates</option>
                </select>
              </div>
              <button type="submit" className="px-4 py-2 bg-green-400 text-black rounded-md w-full border border-b-[3px] border-r-[3px] border-black md:border-b-[5px] md:border-r-[5px] rounded-t-xl">
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DistSportsAward;
