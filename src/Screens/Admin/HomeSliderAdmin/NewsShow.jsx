import React, { useEffect, useState } from "react";
import { useNews } from "../../../hook/useNews";

const NewsShow = () => {
  const { allNews, create, remove, fetchAll, loading } = useNews();

  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchAll();
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setTitle("");
    setDesc("");
    setImage(null);
    setPdf(null);
    setErrors({});
  };

  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handlePdfChange = (e) => setPdf(e.target.files[0]);

  const validateForm = () => {
    const errs = {};
    if (!title.trim()) errs.title = "Title is required.";
    if (!desc.trim()) errs.desc = "Description is required.";
    if (!image) errs.image = "Image is required.";
    if (!pdf) errs.pdf = "PDF is required.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await create({
        title,
        description: desc,
        imageFile: image,
        pdfFile: pdf,
      });
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this news item?")) {
      await remove(id);
    }
  };

  return (
    <>
      <div className="flex px-7 justify-between items-center flex-wrap w-full">
        <h1 className="font-extrabold py-4 text-4xl text-black">News Show</h1>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-green-400 border border-black border-b-[5px] border-r-[5px] rounded-t-xl"
        >
          Add News
        </button>
      </div>

      <div className="container p-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2">Sr. No</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">PDF</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {allNews.map((item, index) => (
                  <tr key={item.id} className="bg-gray-50 hover:bg-gray-100">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="h-20 w-24 object-cover rounded shadow"
                      />
                    </td>
                    <td className="border px-4 py-2">{item.title}</td>
                    <td className="border px-4 py-2 max-w-64">{item.description}</td>
                    <td className="border px-4 py-2">
                      <a href={item.pdfUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                        View PDF
                      </a>
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-4 py-2 bg-red-500 text-white border border-black border-b-[5px] border-r-[5px] rounded-t-xl"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {allNews.length === 0 && !loading && (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      No news available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Add News</h2>
              <button onClick={closeModal} className="text-xl font-bold text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              </div>
              <div>
                <label className="block font-semibold mb-1">Description</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows={3}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.desc && <p className="text-red-500 text-sm">{errors.desc}</p>}
              </div>
              <div>
                <label className="block font-semibold mb-1">Image</label>
                <input type="file" onChange={handleImageChange} />
                {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
              </div>
              <div>
                <label className="block font-semibold mb-1">PDF</label>
                <input type="file" onChange={handlePdfChange} />
                {errors.pdf && <p className="text-red-500 text-sm">{errors.pdf}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsShow;
