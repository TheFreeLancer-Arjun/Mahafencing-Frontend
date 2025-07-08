import { useState } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:3001/api/v1/mahafencing';

export const useMahafencing = () => {
  const [mahafencings, setMahafencings] = useState([]);
  const [latestMahafencing, setLatestMahafencing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleError = (err, fallbackMessage) => {
    console.error(err);
    setError(err.response?.data?.error || fallbackMessage);
  };

  // 📥 Fetch all Mahafencing entries
  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(API_BASE);
      setMahafencings(res.data);
    } catch (err) {
      handleError(err, 'Failed to fetch Mahafencing data');
    } finally {
      setLoading(false);
    }
  };

  // 📥 Fetch latest Mahafencing entry
  const fetchLatest = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/latest`);
      setLatestMahafencing(res.data);
    } catch (err) {
      handleError(err, 'Failed to fetch latest Mahafencing');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Create a new Mahafencing entry
  const create = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(API_BASE, data);
      setMahafencings((prev) => [...prev, res.data]);
      return res.data;
    } catch (err) {
      handleError(err, 'Failed to create Mahafencing');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✏️ Update an existing Mahafencing entry
  const update = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.put(`${API_BASE}/${id}`, data);
      setMahafencings((prev) =>
        prev.map((item) => (item.id === id ? res.data : item))
      );
      return res.data;
    } catch (err) {
      handleError(err, 'Failed to update Mahafencing');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ❌ Delete a Mahafencing entry
  const remove = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setMahafencings((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      handleError(err, 'Failed to delete Mahafencing');
    } finally {
      setLoading(false);
    }
  };

  return {
    mahafencings,
    latestMahafencing,
    loading,
    error,
    fetchAll,
    fetchLatest,
    create,
    update,
    remove,
  };
};
