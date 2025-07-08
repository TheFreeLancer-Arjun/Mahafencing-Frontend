import { useState } from 'react';
import axios from 'axios';

const BASE_URL = '/api/v1/office-bearers'; // Adjust path if needed

export const useOfficeBearers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createOfficeBearer = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(BASE_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Create failed');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getAllOfficeBearers = async () => {
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

  const getOfficeBearerById = async (id) => {
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

  const updateOfficeBearer = async (id, formData) => {
    try {
      setLoading(true);
      const res = await axios.put(`${BASE_URL}/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Update failed');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteOfficeBearer = async (id) => {
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
    createOfficeBearer,
    getAllOfficeBearers,
    getOfficeBearerById,
    updateOfficeBearer,
    deleteOfficeBearer,
  };
};
