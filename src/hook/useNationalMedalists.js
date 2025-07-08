import { useState } from 'react';
import axios from 'axios';

const BASE_URL = '/api/v1/national-medalists'; // adjust if needed

export const useNationalMedalists = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createMedalist = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.post(BASE_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getAllMedalists = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch');
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getMedalistById = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch by ID');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateMedalist = async (id, formData) => {
    try {
      setLoading(true);
      const response = await axios.put(`${BASE_URL}/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteMedalist = async (id) => {
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
    createMedalist,
    getAllMedalists,
    getMedalistById,
    updateMedalist,
    deleteMedalist,
  };
};
