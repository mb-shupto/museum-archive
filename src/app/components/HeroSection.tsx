'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
  className="relative pt-48 pb-40 flex items-center justify-center min-h-screen text-center bg-cover bg-center bg-[url('/museum.jpg')]"
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Liberation War Museum Archive</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 drop-shadow">
          Preserving the legacy, honoring the heroes, and educating future generations about our nation&apos;s struggle for freedom
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/search" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Explore Archives</Link>
          <Link href="/virtual-tour" className="px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow hover:bg-blue-100 transition">Virtual Tour</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;