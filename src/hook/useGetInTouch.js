import { useState, useEffect } from 'react';
import axios from 'axios';

const API = '/api/v1/get-in-touch';

export const useGetInTouch = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 📥 Fetch all
  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setEntries(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  // ➕ Create entry (with optional override)
  const create = async (data = {}) => {
    try {
      setLoading(true);
      const res = await axios.post(API, data);
      await fetchAll(); // refresh
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create');
    } finally {
      setLoading(false);
    }
  };

  // 🔄 Update by ID
  const update = async (id, data) => {
    try {
      setLoading(true);
      const res = await axios.put(`${API}/${id}`, data);
      await fetchAll();
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update');
    } finally {
      setLoading(false);
    }
  };

  // ❌ Delete by ID
  const remove = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API}/${id}`);
      await fetchAll();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete');
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Fetch one by ID
  const getById = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/${id}`);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch by ID');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return {
    entries,
    loading,
    error,
    create,
    update,
    remove,
    getById,
    fetchAll,
  };
};
