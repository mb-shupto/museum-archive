'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Liberation War Museum Archive</h1>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Preserving the legacy, honoring the heroes, and educating future generations about our nation&apos;s struggle for freedom
      </p>
      <div>
        <Link href="/search" className="inline-block mr-4 px-6 py-2 bg-blue-600 text-white rounded">Explore Archives</Link>
        <button className="px-6 py-2 border border-gray-700 rounded text-gray-700">Virtual Tour</button>
      </div>
    </section>
  );
};

export default HeroSection;