import { useState } from 'react';
import axios from 'axios';

const BASE_URL = '/api/v1/admins'; // adjust if your endpoint path differs

export const useAdmins = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createAdmin = async ({ username, password }) => {
    try {
      setLoading(true);
      const res = await axios.post(BASE_URL, { username, password });
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Create failed');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getAllAdmins = async () => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Fetch failed');
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getAdminById = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/${id}`);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Fetch by ID failed');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateAdmin = async (id, { username, password }) => {
    try {
      setLoading(true);
      const res = await axios.put(`${BASE_URL}/${id}`, { username, password });
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Update failed');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteAdmin = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${BASE_URL}/${id}`);
      return true;
    } catch (err) {
      setError(err.response?.data?.error || 'Delete failed');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin,
  };
};
