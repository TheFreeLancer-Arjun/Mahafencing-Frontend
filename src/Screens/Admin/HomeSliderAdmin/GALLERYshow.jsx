import React, { useState } from 'react';
import { useShowGallery } from '../../../hook/useShowGallery';

export default function GALLERYshow() {
  const { galleries, loading, error, create, remove } = useShowGallery();

  const [form, setForm] = useState({
    title: '',
    year: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.year || !form.image) {
      alert('All fields required');
      return;
    }
    const fd = new FormData();
    fd.append('title', form.title);
    fd.append('year', form.year);
    fd.append('image', form.image);
    await create(fd);
    setForm({ title: '', year: '', image: null });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      await remove(id);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Gallery Management</h1>

      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white shadow-md p-4 rounded-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-2">Add Image</h2>
        <div className="mb-2">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            name="year"
            value={form.year}
            onChange={handleChange}
            placeholder="Year"
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Upload
        </button>
      </form>

      {/* Loading/Error */}
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Gallery Display */}
      {galleries
        .sort((a, b) => b.year - a.year) // sort by year descending
        .map((item) => (
          <div key={item.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-3">{item.year}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border p-2 rounded shadow-sm bg-white">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
                <p className="text-lg font-medium">{item.title}</p>
                <p className='text-black'>{item.year}</p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
