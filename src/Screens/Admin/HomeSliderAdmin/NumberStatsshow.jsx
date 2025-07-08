// File: src/pages/admin/numberstats/NumberStatsshow.js
import React, { useEffect, useState } from 'react';
import { useNumberStats } from '../../../hook/useNumberStats';

export default function NumberStatsshow() {
  const { stats, loading, error, fetchStats, updateStats } = useNumberStats();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    registeredPlayers: '',
    shivChhatrapatiAwardees: '',
    nationalMedalists: '',
    internationalMedalists: '',
  });

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    if (stats) {
      setFormData({
        registeredPlayers: stats.registeredPlayers || '',
        shivChhatrapatiAwardees: stats.shivChhatrapatiAwardees || '',
        nationalMedalists: stats.nationalMedalists || '',
        internationalMedalists: stats.internationalMedalists || '',
      });
    }
  }, [stats]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStats(formData);
      setEditMode(false);
    } catch (err) {
      console.error('Update failed');
    }
  };

  if (loading) return <p className="text-center py-4 text-blue-600">Loading...</p>;
  if (error) return <p className="text-center py-4 text-red-600">Error: {error}</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Number Stats</h1>

      {editMode ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
          {['registeredPlayers', 'shivChhatrapatiAwardees', 'nationalMedalists', 'internationalMedalists'].map((field) => (
            <div key={field}>
              <label className="block font-semibold capitalize">
                {field.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </form>
      ) : (
        stats && (
          <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow text-center text-xl font-semibold">
            <div>
              🧍 Registered Players:{' '}
              <span className="text-blue-700">{stats.registeredPlayers}</span>
            </div>
            <div>
              🏅 Shiv Chhatrapati Awardees:{' '}
              <span className="text-green-700">{stats.shivChhatrapatiAwardees}</span>
            </div>
            <div>
              🇮🇳 National Medalists:{' '}
              <span className="text-yellow-600">{stats.nationalMedalists}</span>
            </div>
            <div>
              🌍 International Medalists:{' '}
              <span className="text-purple-700">{stats.internationalMedalists}</span>
            </div>
            <div className="col-span-2 mt-6">
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded"
              >
                Edit Stats
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
