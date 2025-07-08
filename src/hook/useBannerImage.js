// hooks/useBannerImage.js
import { useState } from "react";
import axios from "axios";

export const useBannerImage = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 📥 Get all banner image
  const fetchAll = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/api/v1/banner-image");
      setBannerImages(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch image");
    } finally {
      setLoading(false);
    }
  };

  // 📤 Upload new banner image (FormData includes file + title)
  const upload = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3001/api/v1/banner-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setBannerImages((prev) => [...prev, res.data]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || "Upload failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✏️ Update title of a banner image
  const updateTitle = async (id, title) => {
    try {
      const res = await axios.put(
        `http://localhost:3001/api/v1/banner-image/${id}`,
        { title }
      );
      setBannerImages((prev) =>
        prev.map((img) => (img.id === id ? res.data : img))
      );
    } catch (err) {
      setError(err.response?.data?.error || "Update failed");
    }
  };

  // ❌ Delete banner image
  const deleteBanner = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/banner-image/${id}`);
      setBannerImages((prev) => prev.filter((img) => img.id !== id));
    } catch (err) {
      setError(err.response?.data?.error || "Delete failed");
    }
  };

  // 📥 Get single banner image
  const getById = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/v1/banner-image/${id}`
      );
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || "Not found");
      throw err;
    }
  };

  return {
    bannerImages,
    loading,
    error,
    fetchAll,
    upload,
    updateTitle,
    deleteBanner,
    getById,
  };
};
