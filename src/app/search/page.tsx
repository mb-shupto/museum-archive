'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArtifactContext } from './../contexts/ArtifactContext';
import ArchiveCard from './../components/ArchiveCard';
import { Artifact } from './../types/artifact';
import { ArtifactProvider } from './../contexts/ArtifactContext';
import { AuthProvider } from './../contexts/AuthContext';

function SearchResults() {
  const context = useContext(ArtifactContext);
  const searchArtifacts = context?.searchArtifacts ?? (() => []);
  const searchParams = useSearchParams();
  const [results, setResults] = useState<Artifact[]>([]);

  useEffect(() => {
    const type = searchParams.get('type') || 'Object Head';
    const value = searchParams.get('value') || '';
    const category = searchParams.get('category') || '';
    setResults(searchArtifacts(type, value, category || undefined));
  }, [searchParams, searchArtifacts]);

  return (
    <div className="py-16 px-4">
      <h2 className="text-2xl font-bold mb-8">Search Results: {results.length} artifacts found</h2>
      {results.length === 0 && <p>No artifacts match your search.</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map(artifact => (
          <div key={artifact.id}>
            <ArchiveCard artifact={artifact} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <AuthProvider>
      <ArtifactProvider>
        <SearchResults />
      </ArtifactProvider>
    </AuthProvider>
  );
}