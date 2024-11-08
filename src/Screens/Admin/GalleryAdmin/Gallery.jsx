import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      image: "https://www.shivajipharma.com/assets/img/goal.jpg",
      title: "Fresher Party",
    },
  ]);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const addRow = (event) => {
    event.preventDefault();

    const newRow = {
      id: rows.length + 1,
      image: image ? URL.createObjectURL(image) : "",
      title,
    };

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setRows([...rows, newRow]);
    setTitle("");
    setImage(null);
    closeModal();
  };

  const deleteRow = (id) => {
    const filteredRows = rows.filter((row) => row.id !== id);
    setRows(filteredRows);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const validateForm = () => {
    const errors = {};
    if (!title.trim()) {
      errors.title = "Title is required.";
    }
    if (!image) {
      errors.image = "Image is required.";
    } else if (!/\.(jpg|jpeg|png|gif)$/i.test(image.name)) {
      errors.image = "Please upload a valid image file (jpg, jpeg, png, gif).";
    }
    return errors;
  };

  return (
    <>
      <div className="flex px-4 sm:px-7 justify-between items-center flex-wrap w-full">
        <h1 className="font-extrabold py-4 text-center text-3xl sm:text-4xl text-black">
          Gallery
        </h1>

        <Link>
          <button
            onClick={openModal}
            type="button"
            className="mt-4 px-4 py-2 bg-green-400 text-black rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-500 border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
          >
            Add Gallery
          </button>
        </Link>
      </div>

      <div className="container p-4 sm:p-6">
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full lg:w-[80vw]">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Sr. No</th>
                  <th className="px-4 py-2 text-left">Feature Images</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className="bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <td className="border px-4 py-2 text-sm sm:text-base">
                      {index + 1}
                    </td>
                    <td className="border px-4 py-2">
                      <img
                        src={row.image}
                        alt="Uploaded"
                        className="h-16 w-20 sm:h-20 sm:w-24 object-cover rounded-md shadow"
                      />
                    </td>
                    <td className="border px-4 py-2 text-center font-bold text-sm sm:text-base">
                      {row.title}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => deleteRow(row.id)}
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
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

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-0">
          <div className="bg-yellow-50 p-6 sm:p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl text-center font-semibold text-gray-700">
                Add Gallery
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
                <label
                  className="block text-gray-900 font-semibold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Enter title"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-gray-900 font-semibold mb-2"
                  htmlFor="image"
                >
                  Upload Featured Image
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-400"
                />
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-green-400 text-black py-2 rounded-md border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
