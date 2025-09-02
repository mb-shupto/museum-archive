'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
  <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16 font-sans">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-white drop-shadow">Liberation War Museum</h2>
          <p className="text-gray-200 text-base leading-relaxed">
            Preserving the history and heritage of our nation&apos;s struggle for freedom and independence.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold text-white">Quick Links</h2>
          <ul className="list-none p-0 space-y-2">
            <li><Link href="/" className="text-gray-200 hover:text-blue-300 text-base transition">Home</Link></li>
            <li><Link href="/search" className="text-gray-200 hover:text-blue-300 text-base transition">Archives</Link></li>
            <li><Link href="/exhibits" className="text-gray-200 hover:text-blue-300 text-base transition">Exhibits</Link></li>
            <li><Link href="/education" className="text-gray-200 hover:text-blue-300 text-base transition">Education</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold text-white">Contact</h2>
          <p className="text-gray-200 text-base">
            123 Heritage Street<br />Capital City, Country<br />info@liberationmuseum.org<br />+123 456 7890
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold text-white">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-400 text-white rounded-full p-2 transition" aria-label="Facebook"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12z"/></svg></a>
            <a href="#" className="bg-blue-600 hover:bg-blue-400 text-white rounded-full p-2 transition" aria-label="Twitter"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37c-.83.49-1.75.85-2.72 1.05A4.28 4.28 0 0 0 16.11 4c-2.36 0-4.28 1.92-4.28 4.29 0 .34.04.67.11.99C7.69 9.09 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.09 1.49 3.83 3.47 4.23-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/></svg></a>
            <a href="#" className="bg-blue-600 hover:bg-blue-400 text-white rounded-full p-2 transition" aria-label="Instagram"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.98.98-1.263 2.092-1.322 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.342 2.393 1.322 3.373.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.98-.98 1.263-2.092 1.322-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.342-2.393-1.322-3.373-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg></a>
            <a href="#" className="bg-blue-600 hover:bg-blue-400 text-white rounded-full p-2 transition" aria-label="YouTube"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.998 2.998 0 0 0-2.112-2.112C19.545 3.5 12 3.5 12 3.5s-7.545 0-9.386.574A2.998 2.998 0 0 0 .502 6.186C0 8.027 0 12 0 12s0 3.973.502 5.814a2.998 2.998 0 0 0 2.112 2.112C4.455 20.5 12 20.5 12 20.5s7.545 0 9.386-.574a2.998 2.998 0 0 0 2.112-2.112C24 15.973 24 12 24 12s0-3.973-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-blue-700 pt-6 mt-8 text-gray-300 text-sm">
        © 2025 Liberation War Museum Archive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;