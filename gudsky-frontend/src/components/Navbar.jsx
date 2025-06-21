// Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://gudsky.org/wp-content/uploads/2025/03/cropped_image-1300x1300.png"
            alt="Logo"
            className="h-12 w-12 object-contain rounded-full"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight">
              Gudsky Research Foundation
            </h1>
            <p className="text-xs md:text-sm text-blue-100">
              CIN: U72100WB2024NPL274791 | Darpan: WB/2024/0474558
            </p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium text-sm">
          <a href="#" className="hover:text-blue-200 transition">Home</a>
          <a href="#" className="hover:text-blue-200 transition">Research</a>
          <a href="#" className="hover:text-blue-200 transition">Courses</a>
          <a href="#" className="hover:text-blue-200 transition">About</a>
          <a href="#" className="hover:text-blue-200 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
