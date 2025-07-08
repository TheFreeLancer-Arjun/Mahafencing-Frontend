import React, { useEffect, useState } from "react";
import { useBlueCard } from "../../../hook/useBlueCard";

export default function BlueCardShow() {
  const { blueCards, loading, error, fetchAll, create } = useBlueCard();
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
  });

  useEffect(() => {
    fetchAll();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await create(formData);
      setFormData({
        title1: "",
        title2: "",
        title3: "",
        title4: "",
        title5: "",
      });
      setFormVisible(false);
      fetchAll();
    } catch (err) {
      console.error("Create failed:", err.message);
    }
  };

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // e.g., "7/4/2025, 10:45:32 AM"
  };

  return (
    <div className="p-6">
      {/* Toggle form */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setFormVisible(!formVisible)}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-blue-700"
        >
          {formVisible ? "Cancel" : "Add New Blue Card"}
        </button>
      </div>

      {/* Form */}
      {formVisible && (
        <form
          onSubmit={handleCreate}
          className="max-w-xl mx-auto bg-gray-100 rounded-xl p-6 shadow mb-10"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Create New Blue Card</h2>
          {[1, 2, 3, 4, 5].map((num) => (
            <input
              key={num}
              type="text"
              name={`title${num}`}
              value={formData[`title${num}`]}
              onChange={handleChange}
              placeholder={`Title ${num}`}
              className="w-full mb-3 p-2 border rounded-md"
            />
          ))}
          <button
            type="submit"
            className="bg-green-600 text-white w-full py-2 mt-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      )}

      {/* Display blue cards */}
      {loading ? (
        <div className="text-center py-6 text-blue-700 font-semibold">Loading...</div>
      ) : error ? (
        <div className="text-center py-6 text-red-600 font-semibold">Error: {error}</div>
      ) : blueCards?.length === 0 ? (
        <div className="text-center py-6 text-gray-600">No blue cards available.</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {blueCards.map((card) => (
            <div
              key={card.id}
              className="rounded-xl text-black shadow-md p-6 w-80 bg-white"
            >
              <h2 className="text-2xl font-bold mb-2 text-center">Blue Card #{card.id}</h2>
              <p className="text-sm text-gray-500 text-center mb-4">
                Created on: {formatDateTime(card.createdAt)}
              </p>
              <ul className="space-y-2 text-lg">
                {card.title1 && <li>🔹 {card.title1}</li>}
                {card.title2 && <li>🔹 {card.title2}</li>}
                {card.title3 && <li>🔹 {card.title3}</li>}
                {card.title4 && <li>🔹 {card.title4}</li>}
                {card.title5 && <li>🔹 {card.title5}</li>}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
