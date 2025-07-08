// File: src/hooks/useNumberStats.js
import { useState } from 'react';
import axios from 'axios';

export const useNumberStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch stats
  const fetchStats = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/api/v1/number-stats');
      setStats(res.data[0]); // Assuming only 1 object
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch stats');
    } finally {
      setLoading(false);
    }
  };

  // Update stats
  const updateStats = async (newData) => {
    try {
      const res = await axios.put('http://localhost:3001/api/v1/number-stats', newData);
      setStats(res.data); // Updated data
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update stats');
    }
  };

  return {
    stats,
    loading,
    error,
    fetchStats,
    updateStats,
  };
};
