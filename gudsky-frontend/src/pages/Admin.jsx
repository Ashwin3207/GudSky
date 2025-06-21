import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await axios.get("http://localhost:5000/api/carousel");
    setImages(res.data);
  };

  const handleAddImage = async () => {
    if (newImage.trim()) {
      const res = await axios.post("http://localhost:5000/api/carousel", {
        url: newImage,
      });
      setImages([...images, res.data]);
      setNewImage("");
    }
  };

  const handleUpdateImage = async (id, url) => {
    const res = await axios.put(`http://localhost:5000/api/carousel/${id}`, {
      url,
    });
    setImages(images.map((img) => (img._id === id ? res.data : img)));
  };

  const handleDeleteImage = async (id) => {
    if (images.length === 1) {
      alert("At least one image must remain in the carousel.");
      return;
    }
    await axios.delete(`http://localhost:5000/api/carousel/${id}`);
    setImages(images.filter((img) => img._id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Carousel Image Management
      </h2>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Add New Image URL:</label>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full p-2 border rounded shadow"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            placeholder="Enter image URL..."
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleAddImage}
          >
            Add
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {images.map((img) => (
          <div key={img._id} className="bg-white shadow p-4 rounded-lg">
            <img
              src={img.url}
              alt="Carousel Preview"
              className="w-full h-48 object-cover rounded mb-2"
            />
            <input
              type="text"
              value={img.url}
              onChange={(e) => handleUpdateImage(img._id, e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
            <button
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              onClick={() => handleDeleteImage(img._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
