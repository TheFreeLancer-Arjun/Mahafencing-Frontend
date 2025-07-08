import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:3001/api/v1/our-gallery';

export const useOurGallery = () => {
  const [gallery, setGallery] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 📦 Fetch all, grouped by year
  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setGallery(res.data); // grouped by year
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load gallery');
    } finally {
      setLoading(false);
    }
  };

  // ➕ Create a new item (multipart/form-data)
  const create = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(API, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await fetchAll(); // refresh data
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create gallery item');
    } finally {
      setLoading(false);
    }
  };

  // ❌ Delete an item by ID
  const remove = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API}/${id}`);
      await fetchAll(); // refresh data
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete item');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return {
    gallery,       // object grouped by year: { 2024: [..], 2023: [..], ... }
    loading,
    error,
    fetchAll,
    create,
    remove,
  };
};
