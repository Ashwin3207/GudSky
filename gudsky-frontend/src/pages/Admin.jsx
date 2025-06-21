import React, { useState, useEffect } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Admin() {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get(`${API}/api/carousel`);
      setImages(res.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleAddImage = async () => {
    if (newImage.trim()) {
      try {
        const res = await axios.post(`${API}/api/carousel`, {
          url: newImage,
        });
        setImages([...images, res.data]);
        setNewImage("");
      } catch (error) {
        console.error("Error adding image:", error);
      }
    }
  };

  const handleUpdateImage = async (id, url) => {
    try {
      const res = await axios.put(`${API}/api/carousel/${id}`, {
        url,
      });
      setImages(images.map((img) => (img._id === id ? res.data : img)));
    } catch (error) {
      console.error("Error updating image:", error);
    }
  };

  const handleDeleteImage = async (id) => {
    if (images.length === 1) {
      alert("At least one image must remain in the carousel.");
      return;
    }
    try {
      await axios.delete(`${API}/api/carousel/${id}`);
      setImages(images.filter((img) => img._id !== id));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
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
