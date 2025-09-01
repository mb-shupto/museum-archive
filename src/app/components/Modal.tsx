'use client';

import React from 'react';
import { ArtifactContext } from '../contexts/ArtifactContext';
import { Artifact } from '../types/artifact';
import Image from 'next/image';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  artifactId: string;
}

const Modal = ({ open, onClose, artifactId }: ModalProps) => {
  const context = React.useContext(ArtifactContext);
  const artifacts = context?.artifacts ?? [];
  const artifact = artifacts.find((a: Artifact) => a.id === parseInt(artifactId));

  if (!artifact) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${open ? '' : 'hidden'}`}>
      <div className="bg-white p-8 rounded-lg max-w-2xl w-[90%] max-h-[90vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Archive Details</h2>
          <button onClick={onClose} className="text-2xl">×</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {artifact.images[0] && (
              <Image
                src={artifact.images[0]}
                alt={artifact.objectHead}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
                style={{ objectFit: 'cover' }}
                priority
              />
            )}
          </div>
          <div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="font-semibold">Type: {artifact.objectType}</div>
              <div className="font-semibold">Year: {artifact.collectionDate}</div>
              <div className="font-semibold">Location: {artifact.foundPlace}</div>
              <div className="font-semibold">Access Level: {artifact.accessLevel}</div>
              <div className="font-semibold">Donor: {artifact.contributorName}</div>
            </div>
          </div>
        </div>
        <h3 className="mt-4 mb-2 font-bold">Description</h3>
        <p className="text-gray-700 mb-4">{artifact.description}</p>
        <h3 className="mt-4 mb-2 font-bold">Additional Information</h3>
        <p className="text-gray-700 mb-4">{artifact.additionalInfo}</p>
        <div className="flex justify-end gap-4 mt-4">
          <button className="px-4 py-2 border border-gray-400 rounded">Download</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Share</button>
        </div>
      </div>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
    </div>
  );
};

export default Modal;
