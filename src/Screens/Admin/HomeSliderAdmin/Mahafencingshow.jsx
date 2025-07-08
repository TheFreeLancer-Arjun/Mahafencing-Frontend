import React, { useState, useEffect } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useMahafencing } from '../../../hook/useMahafencing';

export default function Mahafencingshow() {
  const {
    mahafencings,
    fetchAll,
    create,
    remove,
    loading,
    error,
  } = useMahafencing();

  const [desc, setDesc] = useState('');
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchAll();
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setDesc('');
    setErrors({});
  };

  const validateForm = () => {
    const errors = {};
    if (!desc.trim()) errors.desc = 'Description is required.';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await create({ description: desc }); // ✅ FIXED KEY HERE
      setDesc('');
      setErrors({});
      closeModal();
    } catch (err) {
      // Error is handled by hook
    }
  };

  const handleDelete = async (id) => {
    await remove(id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">Mahafencing Text</h1>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-green-400 text-black rounded-md border border-b-4 border-r-4 border-black"
        >
          <IoMdAdd className="inline mr-2" /> Add Text
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Text</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...mahafencings]
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {new Date(item.createdAt).toLocaleString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-1 bg-red-500 text-white rounded-md border border-b-4 border-r-4 border-black"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Text</h2>
              <button onClick={closeModal} className="text-gray-600 text-xl font-bold">
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Text</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your Mahafencing description..."
                ></textarea>
                {errors.desc && <p className="text-red-500 text-sm">{errors.desc}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 border border-b-4 border-r-4 border-black text-black py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
