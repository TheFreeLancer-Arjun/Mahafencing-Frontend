import { useState } from 'react';
import axios from 'axios';

const BASE_URL = '/api/v1/research'; // Adjust if your route is different

export const useResearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createResearch = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(BASE_URL, data);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Create failed');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getAllResearches = async () => {
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

  const getResearchById = async (id) => {
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

  const updateResearch = async (id, data) => {
    try {
      setLoading(true);
      const res = await axios.put(`${BASE_URL}/${id}`, data);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Update failed');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteResearch = async (id) => {
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
    createResearch,
    getAllResearches,
    getResearchById,
    updateResearch,
    deleteResearch,
  };
};
