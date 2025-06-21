// pages/ComingSoon.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6">
      <div className="max-w-xl text-center bg-white p-10 rounded-2xl shadow-2xl border border-blue-100">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">🚧 Page Under Development</h1>
        <p className="text-gray-600 text-lg mb-6">
          This page is currently under construction. We’re working hard to bring you something amazing.
        </p>
        <p className="text-gray-500 mb-6 italic">Stay tuned for updates!</p>
        <Link
          to="/"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
