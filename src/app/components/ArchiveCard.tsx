'use client';

import React from 'react';
import Link from 'next/link';
import { Artifact } from '../types/artifact';

interface ArchiveCardProps {
  artifact: Artifact;
}

const ArchiveCard = ({ artifact }: ArchiveCardProps) => {
  return (
    <div className="overflow-hidden transition-all mb-4 bg-white rounded shadow">
      {artifact.images[0] && (
        <img src={artifact.images[0]} alt={artifact.objectHead} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <div className="text-blue-600 text-sm font-semibold">
          {artifact.category} • {artifact.collectionDate}
        </div>
        <h3 className="mt-2 mb-2 text-lg font-bold">{artifact.objectHead}</h3>
        <p className="mb-4 text-gray-700 text-sm">{artifact.description.substring(0, 100)}...</p>
        <div className="text-xs text-gray-500 mb-2">Access Level: {artifact.accessLevel}</div>
        <Link href={`/artifact/${artifact.id}`} className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ArchiveCard;