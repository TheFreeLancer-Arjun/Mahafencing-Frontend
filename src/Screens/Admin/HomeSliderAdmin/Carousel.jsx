import React, { useState } from "react";
import { MdOutlineViewCarousel } from "react-icons/md";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      image: "https://www.shivajipharma.com/assets/img/banner/s-1.jpg",
    },
    {
      id: 2,
      image: "blob:http://localhost:3000/faca633f-0f82-4b83-9289-ad9ea8f0c64e",
    },
  ]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, image: null }]);
  };

  const deleteRow = (id) => {
    const filteredRows = rows.filter((row) => row.id !== id);
    setRows(filteredRows);
  };

  const handleImageChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const newRows = rows.map((row) =>
        row.id === id ? { ...row, image: URL.createObjectURL(file) } : row
      );
      setRows(newRows);
    }
  };

  return (
    <>
<div className="bg-yellow-50">
  
<div className="flex px-7 justify-between items-center flex-wrap w-full  ">
        {/* Heading on the Left */}
        <h1 className="font-extrabold py-4 text-center text-4xl text-black flex items-center justify-center">
        Carousel
          
        </h1>

        <Link>
          <button
            onClick={addRow}
            type="button"
            className="mt-4 px-8 py-2 bg-green-400 text-black rounded-md hover: focus:outline-none focus:ring-2 focus:ring-gray-500    border border-b-[5px] border-r-[5px] border-black    rounded-t-xl"
          >
            Add 
          </button>
        </Link>
      </div>

      {console.log(rows)}
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Sr. No</th>
                  <th className="px-4 py-2 text-left">Images</th>
                  <th className="px-4 py-2 text-left">Add Images</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className="bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">
                      <img
                        src={row.image}
                        alt="Uploaded"
                        className="h-20 w-24 object-cover rounded-md shadow"
                        required
                      />
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        required
                        onChange={(e) => handleImageChange(e, row.id)}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      />
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => deleteRow(row.id)}
                        className="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500    border border-b-[5px] border-r-[5px] border-black    rounded-t-xl"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
  
  </div> 

    </>
  );
};

export default Carousel;
