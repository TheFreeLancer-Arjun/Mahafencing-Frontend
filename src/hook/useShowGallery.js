import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:3001/api/v1/show-gallery';

export const useShowGallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [single, setSingle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔃 Fetch all
  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_BASE);
      setGalleries(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch gallery');
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Fetch by ID
  const fetchById = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/${id}`);
      setSingle(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch item');
    } finally {
      setLoading(false);
    }
  };

  // ➕ Create (multipart/form-data)
  const create = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(API_BASE, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await fetchAll();
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create item');
    } finally {
      setLoading(false);
    }
  };

  // ✏️ Update
  const update = async (id, formData) => {
    try {
      setLoading(true);
      const res = await axios.put(`${API_BASE}/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await fetchAll();
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update item');
    } finally {
      setLoading(false);
    }
  };

  // ❌ Delete
  const remove = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API_BASE}/${id}`);
      await fetchAll();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete item');
    } finally {
      setLoading(false);
    }
  };

  // 🧲 Auto-fetch on mount
  useEffect(() => {
    fetchAll();
  }, []);

  return {
    galleries,
    single,
    loading,
    error,
    fetchAll,
    fetchById,
    create,
    update,
    remove,
  };
};
