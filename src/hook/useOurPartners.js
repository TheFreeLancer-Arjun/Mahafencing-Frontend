import { useState, useEffect } from 'react';
import axios from 'axios';

const API = '/api/v1/our-partners';

export const useOurPartners = () => {
  const [partners, setPartners] = useState([]);
  const [singlePartner, setSinglePartner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔃 Fetch all partners
  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setPartners(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load partners');
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Fetch partner by ID
  const fetchById = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/${id}`);
      setSinglePartner(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load partner');
    } finally {
      setLoading(false);
    }
  };

  // ➕ Create new partner (multipart/form-data)
  const create = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(API, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await fetchAll();
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create partner');
    } finally {
      setLoading(false);
    }
  };

  // ✏️ Update partner (image optional)
  const update = async (id, formData) => {
    try {
      setLoading(true);
      const res = await axios.put(`${API}/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await fetchAll();
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update partner');
    } finally {
      setLoading(false);
    }
  };

  // ❌ Delete partner
  const remove = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API}/${id}`);
      await fetchAll();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete partner');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return {
    partners,
    singlePartner,
    loading,
    error,
    fetchAll,
    fetchById,
    create,
    update,
    remove,
  };
};
