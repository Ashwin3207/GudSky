// Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-blue-500 pb-1">Contact</h3>
          <p>1/11 Anandnagar Vidyasagar Pally</p>
          <p>Liluah, Howrah - 711203</p>
          <p className="mt-1">+91 93056 41151</p>
          <p>Support@gudsky.org</p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-blue-500 pb-1">About Us</h3>
          <p className="text-gray-300">
            Empowering students with mentorship, research platforms, and
            collaborative workshops globally.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-blue-500 pb-1">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-400">Refund Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Shipping Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-blue-500 pb-1">Follow Us</h3>
          <div className="flex flex-col space-y-2 text-gray-300">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">X (Twitter)</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">WhatsApp</a>
          </div>
          <p className="text-gray-500 mt-6">&copy; 2025 Gudsky Research Foundation</p>
        </div>
      </div>
    </footer>
  );
}
