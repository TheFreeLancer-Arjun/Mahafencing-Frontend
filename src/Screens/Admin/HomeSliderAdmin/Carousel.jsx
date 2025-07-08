import React, { useEffect } from "react";
import { useBannerImage } from "../../../hook/useBannerImage"; // adjust path if needed

const Carousel = () => {
  const {
    bannerImages,
    loading,
    error,
    fetchAll,
    upload,
    deleteBanner,
  } = useBannerImage();

  useEffect(() => {
    fetchAll(); // Fetch images when component mounts
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", "Carousel Image"); // You can replace or make this editable

    try {
      await upload(formData);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBanner(id);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="bg-yellow-50 min-h-screen">
      <div className="flex px-7 justify-between items-center flex-wrap w-full">
        <h1 className="font-extrabold py-4 text-center text-4xl text-black">
          BannerImages
        </h1>
        <label className="mt-4 cursor-pointer px-8 py-2 bg-green-400 text-black rounded-md hover:focus:outline-none border border-b-[5px] border-r-[5px] border-black rounded-t-xl">
          Add Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {loading && <p className="text-center py-4 text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="container lg:p-6">
        <div className="bg-white shadow-lg rounded-lg lg:p-4 lg:w-[80vw] xs:w-[100vw]">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Sr. No</th>
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {bannerImages.map((img, index) => (
                  <tr
                    key={img.id}
                    className="bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">
                      <img
                        src={img.url}
                        alt={`banner-${index}`}
                        className="h-20 w-24 object-cover rounded-md shadow"
                      />
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(img.id)}
                        className="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {bannerImages.length === 0 && !loading && (
                  <tr>
                    <td colSpan={3} className="text-center py-4 text-gray-500">
                      No banner images found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
