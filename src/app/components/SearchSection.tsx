'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchSection = () => {
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('All Categories');
  const router = useRouter();

  const handleSearch = () => {
    if (searchValue.trim()) {
      router.push(`/search?type=Object Head&value=${encodeURIComponent(searchValue)}&category=${encodeURIComponent(category === 'All Categories' ? '' : category)}`);
    } else {
      alert('Enter a search term');
    }
  };

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-2xl font-bold mb-4">Search Our Digital Archives</h2>
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Search documents, photos, artifacts..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded"
          />
          <select aria-label='Select category' value={category} onChange={(e) => setCategory(e.target.value)} className="min-w-[200px] px-4 py-2 border border-gray-300 rounded">
            <option value="All Categories">All Categories</option>
            <option value="Photographs">Photographs</option>
            <option value="Documents">Documents</option>
            <option value="Artifacts">Artifacts</option>
            <option value="Audio Recordings">Audio Recordings</option>
            <option value="Video Footage">Video Footage</option>
          </select>
          <button onClick={handleSearch} className="px-6 py-2 bg-blue-600 text-white rounded">Search</button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;