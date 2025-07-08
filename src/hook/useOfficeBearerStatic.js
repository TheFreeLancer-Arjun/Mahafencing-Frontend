import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:3001/api/v1/office-bearer-static';

export const useOfficeBearerStatic = () => {
  const [data, setData] = useState([]);
  const [one, setOne] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔃 Fetch all
  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_BASE);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Fetch by ID
  const fetchById = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/${id}`);
      setOne(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Error fetching record');
    } finally {
      setLoading(false);
    }
  };

  // ➕ Create
  const create = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(API_BASE, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await fetchAll();
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Error creating record');
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
      setError(err.response?.data?.error || 'Error updating record');
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
      setError(err.response?.data?.error || 'Error deleting record');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return {
    data,
    one,
    loading,
    error,
    fetchAll,
    fetchById,
    create,
    update,
    remove,
  };
};
