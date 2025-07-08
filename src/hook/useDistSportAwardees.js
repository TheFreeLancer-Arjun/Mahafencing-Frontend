import { useState } from 'react';
import axios from 'axios';

const BASE_URL = '/api/v1/dist-sport-awardees'; // Adjust this if your API prefix differs

export const useDistSportAwardees = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createAwardee = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.post(BASE_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create');
    } finally {
      setLoading(false);
    }
  };

  const getAllAwardees = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  const getAwardeeById = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  const updateAwardee = async (id, formData) => {
    try {
      setLoading(true);
      const response = await axios.put(`${BASE_URL}/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update');
    } finally {
      setLoading(false);
    }
  };

  const deleteAwardee = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${BASE_URL}/${id}`);
      return true;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createAwardee,
    getAllAwardees,
    getAwardeeById,
    updateAwardee,
    deleteAwardee,
  };
};
