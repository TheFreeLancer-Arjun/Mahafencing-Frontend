import { useState } from 'react';
import axios from 'axios';

const BASE_URL = '/api/v1/nis-coach'; // adjust if your route is different

export const useNISCoach = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createNISCoach = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(BASE_URL, data);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getAllNISCoaches = async () => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch list');
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getNISCoachById = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/${id}`);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch item');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateNISCoach = async (id, data) => {
    try {
      setLoading(true);
      const res = await axios.put(`${BASE_URL}/${id}`, data);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteNISCoach = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${BASE_URL}/${id}`);
      return true;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createNISCoach,
    getAllNISCoaches,
    getNISCoachById,
    updateNISCoach,
    deleteNISCoach,
  };
};
