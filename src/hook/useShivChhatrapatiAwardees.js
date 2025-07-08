import { useState, useEffect } from 'react';
import axios from 'axios';

const API = '/api/v1/shiv-chhatrapati-awardees';

export const useShivChhatrapatiAwardees = () => {
  const [awardees, setAwardees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 📥 Fetch all awardees
  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setAwardees(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch awardees');
    } finally {
      setLoading(false);
    }
  };

  // ➕ Create a new awardee (with FormData)
  const create = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post(API, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await fetchAll(); // refresh
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create awardee');
    } finally {
      setLoading(false);
    }
  };

  // ✏️ Update an awardee
  const update = async (id, data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.put(`${API}/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await fetchAll(); // refresh
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update awardee');
    } finally {
      setLoading(false);
    }
  };

  // ❌ Delete awardee
  const remove = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API}/${id}`);
      await fetchAll();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete awardee');
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Fetch single by ID
  const getById = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/${id}`);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch awardee');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return {
    awardees,
    loading,
    error,
    fetchAll,
    create,
    update,
    remove,
    getById,
  };
};
