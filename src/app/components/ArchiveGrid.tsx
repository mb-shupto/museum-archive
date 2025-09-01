'use client';

import React, { useState, useContext } from 'react';
import { ArtifactContext } from '../contexts/ArtifactContext';
import ArchiveCard from './ArchiveCard';
import { Artifact } from '../types/artifact';

const ArchiveGrid = () => {
  const context = useContext(ArtifactContext);
  const artifacts = context?.artifacts ?? [];
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredArtifacts: Artifact[] = artifacts.filter(a => 
    activeFilter === 'All' || a.category === activeFilter
  );

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-2xl font-bold mb-8">Featured Archives</h2>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {['All', 'Photographs', 'Documents', 'Artifacts', 'Audio', 'Video'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded ${activeFilter === filter ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} transition`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredArtifacts.map(artifact => (
          <ArchiveCard key={artifact.id} artifact={artifact} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded">Browse All Archives</button>
      </div>
    </section>
  );
};

export default ArchiveGrid;