import { useState, useEffect } from 'react';
import axios from 'axios';

const API = '/api/v1/messages';

export const useUserMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 📥 Fetch all messages
  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setMessages(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  // ➕ Submit a message
  const create = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(API, data);
      await fetchAll(); // refresh messages
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit message');
    } finally {
      setLoading(false);
    }
  };

  // ❌ Delete a message by ID
  const remove = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API}/${id}`);
      await fetchAll(); // refresh messages
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete message');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return {
    messages,
    loading,
    error,
    fetchAll,
    create,
    remove,
  };
};
