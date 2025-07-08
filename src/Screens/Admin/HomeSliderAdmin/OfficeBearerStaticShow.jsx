import React, { useEffect, useState } from 'react';
import { useOfficeBearerStatic } from '../../../hook/useOfficeBearerStatic';

export default function OfficeBearerStaticShow() {
  const {
    data,
    loading,
    error,
    fetchAll,
    create,
    update,
    remove,
  } = useOfficeBearerStatic();

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    description: '',
    image: null,
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchAll();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('designation', formData.designation);
    form.append('description', formData.description);
    if (formData.image) {
      form.append('image', formData.image);
    }

    if (editId) {
      await update(editId, form);
    } else {
      await create(form);
    }

    setFormData({
      name: '',
      designation: '',
      description: '',
      image: null,
    });
    setEditId(null);
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      designation: item.designation,
      description: item.description,
      image: null,
    });
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      await remove(id);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Office Bearers</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-10 space-y-4">
        <div>
          <label className="block font-semibold">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Designation</label>
          <input
            name="designation"
            type="text"
            value={formData.designation}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold">Image {editId ? '(optional)' : '(required)'}</label>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
            required={!editId}
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Create'}
        </button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setFormData({ name: '', designation: '', description: '', image: null });
            }}
            className="ml-4 bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Error and Loading */}
      {loading && <p className="text-blue-600">Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {/* Display List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow rounded p-4 relative">
            <img
              src={item.url}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.designation}</p>
            <p className="mt-2">{item.description}</p>
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-yellow-400 text-white px-2 py-1 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
