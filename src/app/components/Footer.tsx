'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h2 className="mb-4 text-lg font-bold">Liberation War Museum</h2>
          <p className="text-gray-300 text-sm">
            Preserving the history and heritage of our nation&apos;s struggle for freedom and independence.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold">Quick Links</h2>
          <ul className="list-none p-0">
            <li><a href="/" className="text-gray-300 hover:text-white text-sm">Home</a></li>
            <li><a href="/search" className="text-gray-300 hover:text-white text-sm">Archives</a></li>
            <li><a href="/exhibits" className="text-gray-300 hover:text-white text-sm">Exhibits</a></li>
            <li><a href="/education" className="text-gray-300 hover:text-white text-sm">Education</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold">Contact</h2>
          <p className="text-gray-300 text-sm">
            123 Heritage Street<br />Capital City, Country<br />info@liberationmuseum.org<br />+123 456 7890
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold">Follow Us</h2>
          <div className="flex gap-4">
            <span className="text-gray-300 text-sm">F</span>
            <span className="text-gray-300 text-sm">T</span>
            <span className="text-gray-300 text-sm">I</span>
            <span className="text-gray-300 text-sm">Y</span>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-600 pt-4 text-gray-400 text-sm">
        © 2025 Liberation War Museum Archive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;