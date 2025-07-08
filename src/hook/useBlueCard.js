// hooks/useBlueCard.js
import { useState } from 'react';
import axios from 'axios';

export const useBlueCard = () => {
  const [blueCards, setBlueCards] = useState([]);
  const [latestBlueCard, setLatestBlueCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 📥 Get all blue card
  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/api/v1/blue-card');
      setBlueCards(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  // 📥 Get latest blue card
  const fetchLatest = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/api/v1/blue-card/latest');
      setLatestBlueCard(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch latest');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Create blue card
  const create = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:3001/api/v1/blue-card', data);
      setBlueCards((prev) => [...prev, res.data]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Create failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✏️ Update blue card
  const update = async (id, data) => {
    try {
      const res = await axios.put(`http://localhost:3001/api/v1/blue-card/${id}`, data);
      setBlueCards((prev) =>
        prev.map((card) => (card.id === id ? res.data : card))
      );
    } catch (err) {
      setError(err.response?.data?.error || 'Update failed');
    }
  };

  // ❌ Delete blue card
  const remove = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/blue-card/${id}`);
      setBlueCards((prev) => prev.filter((card) => card.id !== id));
    } catch (err) {
      setError(err.response?.data?.error || 'Delete failed');
    }
  };

  return {
    blueCards,
    latestBlueCard,
    loading,
    error,
    fetchAll,
    fetchLatest,
    create,
    update,
    remove,
  };
};
