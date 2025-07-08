// hooks/useNews.js
import { useState } from 'react';
import axios from 'axios';

export const useNews = () => {
  const [allNews, setAllNews] = useState([]);
  const [latestNews, setLatestNews] = useState(null);
  const [nextSixNews, setNextSixNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 📥 Get all news (latest first)
  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/api/v1/news');
      setAllNews(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  // 📥 Get latest news + next 6
  const fetchLatestWithSix = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/api/v1/news/latest');
      setLatestNews(res.data.latest);
      setNextSixNews(res.data.others);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch latest news');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Create news with image and PDF
  const create = async ({ title, description, imageFile, pdfFile }) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('image', imageFile);
      formData.append('pdf', pdfFile);

      const res = await axios.post('http://localhost:3001/api/v1/news', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setAllNews((prev) => [res.data, ...prev]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create news');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✏️ Update news (text + optionally new image and/or PDF)
  const update = async (id, { title, description, imageFile, pdfFile }) => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      if (imageFile) formData.append('image', imageFile);
      if (pdfFile) formData.append('pdf', pdfFile);

      const res = await axios.put(`http://localhost:3001/api/v1/news/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setAllNews((prev) =>
        prev.map((news) => (news.id === id ? res.data : news))
      );
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update news');
    }
  };

  // ❌ Delete news
  const remove = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/news/${id}`);
      setAllNews((prev) => prev.filter((news) => news.id !== id));
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete news');
    }
  };

  return {
    allNews,
    latestNews,
    nextSixNews,
    loading,
    error,
    fetchAll,
    fetchLatestWithSix,
    create,
    update,
    remove,
  };
};
