import React, { useState } from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { Link } from "react-router-dom";

const Research = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Default Name",
      degree: "Default Degree",
      university: "Default University",
      year: "2023",
    },
  ]);

  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [year, setYear] = useState("");

  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required.";
    if (!degree.trim()) errors.degree = "Degree is required.";
    if (!university.trim()) errors.university = "University is required.";
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
      degree,
      university,
      year,
    };

    setRows([...rows, newRow]);
    setName("");
    setDegree("");
    setUniversity("");
    setYear("");

    closeModal();
  };

  const deleteRow = (id) => {
    const filteredRows = rows.filter((row) => row.id !== id);
    setRows(filteredRows);
  };

  return (
    <>
      <div className="flex flex-wrap px-4 sm:px-7 justify-between items-center w-full">
        <h1 className="font-extrabold py-4 text-center text-2xl sm:text-4xl text-black flex items-center justify-center">
          Research
        </h1>
        <Link>
          <button
            onClick={openModal}
            type="button"
            className="mt-2 sm:mt-4 px-3 sm:px-4 py-2 bg-green-400 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
          >
            Add Research
          </button>
        </Link>
      </div>

      <div className="container p-4 sm:p-6">
        <div className="bg-white shadow-lg rounded-lg p-4 lg:w-[80vw] xs:w-[100vw]">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Sr. No</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Degree</th>
                  <th className="px-4 py-2 text-left">University</th>
                  <th className="px-4 py-2 text-left">Year</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.id} className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{row.name}</td>
                    <td className="border px-4 py-2">{row.degree}</td>
                    <td className="border px-4 py-2">{row.university}</td>
                    <td className="border px-4 py-2">{row.year}</td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => deleteRow(row.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
                      >
                        Delete Research
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
          <div className="bg-yellow-50 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl text-center font-semibold text-gray-700">Add Research</h2>
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
                <label className="block text-gray-900 font-semibold mb-2">Degree</label>
                <input
                  type="text"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter degree"
                />
                {errors.degree && <p className="text-red-500 text-sm mt-1">{errors.degree}</p>}
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">University</label>
                <input
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter university"
                />
                {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university}</p>}
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
              
              <button type="submit" className="px-4 py-2 bg-green-400 text-black rounded-md w-full border border-b-[5px] border-r-[5px] border-black rounded-t-xl">
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Research;
