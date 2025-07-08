// hooks/useOurInspirations.js
import { useState } from 'react';
import axios from 'axios';

export const useOurInspirations = () => {
  const [inspirations, setInspirations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 📥 Fetch all
  const fetchInspirations = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/api/v1/our-inspiration');
      setInspirations(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  // 📄 Get one by ID
  const getInspirationById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/v1/our-inspiration/${id}`);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch');
      return null;
    }
  };

  // ➕ Create (with image)
  const createInspiration = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('designation', data.designation);
      formData.append('description', data.description);
      formData.append('image', data.image); // `image` must be a File

      const res = await axios.post('http://localhost:3001/api/v1/our-inspiration', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setInspirations((prev) => [res.data, ...prev]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create');
      return null;
    }
  };

  // ✏️ Update (with optional image)
  const updateInspiration = async (id, data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('designation', data.designation);
      formData.append('description', data.description);
      if (data.image) {
        formData.append('image', data.image); // Replace only if exists
      }

      const res = await axios.put(`http://localhost:3001/api/v1/our-inspiration/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setInspirations((prev) =>
        prev.map((item) => (item.id === id ? res.data : item))
      );

      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update');
      return null;
    }
  };

  // ❌ Delete
  const deleteInspiration = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/our-inspiration/${id}`);
      setInspirations((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete');
    }
  };

  return {
    inspirations,
    loading,
    error,
    fetchInspirations,
    getInspirationById,
    createInspiration,
    updateInspiration,
    deleteInspiration,
  };
};
