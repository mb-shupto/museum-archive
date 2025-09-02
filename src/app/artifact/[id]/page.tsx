'use client';

import React, { useState, useContext } from 'react';
import { useParams } from 'next/navigation';
import { ArtifactContext } from './../../contexts/ArtifactContext';
import Modal from './../../components/Modal';
// ...removed MUI imports...
import { Artifact } from './../../types/artifact';

export default function ArtifactDetail() {
  const context = useContext(ArtifactContext);
  const artifacts = context?.artifacts ?? [];
  const { id } = useParams<{ id: string }>();
  const artifact = artifacts.find(a => a.id === parseInt(id || '0'));
  const [openModal, setOpenModal] = useState(false);

  if (!artifact) return <div className="text-center text-red-600 mt-16">Artifact not found</div>;

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">{artifact.objectHead}</h1>
      <button
        onClick={() => setOpenModal(true)}
        className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors mb-4"
      >
        View Details
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} artifactId={id || '0'} />
    </div>
  );
}