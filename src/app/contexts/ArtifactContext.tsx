// contexts/ArtifactContext.tsx
'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Artifact } from '../types/artifact';

interface ArtifactContextType {
  artifacts: Artifact[];
  addArtifact: (newArtifact: Artifact) => void;
  searchArtifacts: (type: string, value: string, category?: string) => Artifact[];
  updateArtifact: (id: number, updatedArtifact: Partial<Artifact>) => void;
  deleteArtifact: (id: number) => void;
}

export const ArtifactContext = createContext<ArtifactContextType | undefined>(undefined);

export const ArtifactProvider = ({ children }: { children: ReactNode }) => {
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);

  useEffect(() => {
    const storedArtifacts = JSON.parse(localStorage.getItem('artifacts') || '[]') as Artifact[] || [
      {
        id: 1, collectionNumber: 'COL001', accessionNumber: 'ACC001', collectionDate: '1971-12-16',
        contributorName: 'Unknown', objectType: 'Photograph', objectHead: 'Victory Day Protest Photo',
        description: 'Photograph of public demonstration during 1971 liberation activities.', measurement: '10x15cm', images: ['/mnt/data/202410-mukti-cover.jpg'],
        galleryNumber: 'G1', foundPlace: 'Dhaka', category: 'Photographs', accessLevel: 'Public',
        additionalInfo: 'Captured during Victory Day celebrations.'
      },
      {
        id: 2, collectionNumber: 'COL002', accessionNumber: 'ACC002', collectionDate: '1971-03-26',
        contributorName: 'Provisional Govt', objectType: 'Document', objectHead: 'Freedom Fighter\'s Letter',
        description: 'Scanned handwritten letter describing frontline experiences.', measurement: 'A4', images: ['/mnt/data/202410-mukti-cover.jpg'],
        galleryNumber: 'G2', foundPlace: 'Mujibnagar', category: 'Documents', accessLevel: 'Public',
        additionalInfo: 'Authored by a guerrilla fighter.'
      },
      {
        id: 3, collectionNumber: 'COL003', accessionNumber: 'ACC003', collectionDate: '2015-05-12',
        contributorName: 'Rahman', objectType: 'Audio', objectHead: 'Oral History — Interview with Rahman',
        description: 'An audio interview transcript and recording with a veteran.', measurement: 'N/A', images: ['/mnt/data/202410-mukti-cover.jpg'],
        galleryNumber: 'G3', foundPlace: 'Chittagong', category: 'Audio', accessLevel: 'Public',
        additionalInfo: 'Recorded in 2015.'
      },
      {
        id: 4, collectionNumber: 'COL004', accessionNumber: 'ACC004', collectionDate: '1971-07-15',
        contributorName: 'Unknown', objectType: 'Poster', objectHead: 'Propaganda Poster',
        description: 'Printed poster used to mobilize support during the struggle.', measurement: '50x70cm', images: ['/mnt/data/202410-mukti-cover.jpg'],
        galleryNumber: 'G4', foundPlace: 'Sylhet', category: 'Posters', accessLevel: 'Public',
        additionalInfo: 'Distributed widely in 1971.'
      },
      {
        id: 5, collectionNumber: 'COL005', accessionNumber: 'ACC005', collectionDate: '1971-09-10',
        contributorName: 'Red Cross', objectType: 'Object', objectHead: 'Field Artifact — Uniform',
        description: 'Preserved uniform worn by a freedom fighter.', measurement: 'M', images: ['/mnt/data/202410-mukti-cover.jpg'],
        galleryNumber: 'G5', foundPlace: 'Comilla', category: 'Objects', accessLevel: 'Researchers',
        additionalInfo: 'Donated by a veteran family.'
      },
      {
        id: 6, collectionNumber: 'COL006', accessionNumber: 'ACC006', collectionDate: '1971-11-20',
        contributorName: 'Unknown', objectType: 'Newspaper', objectHead: 'Newspaper — Front Page',
        description: 'Original printed front page announcing major events.', measurement: 'A3', images: ['/mnt/data/202410-mukti-cover.jpg'],
        galleryNumber: 'G6', foundPlace: 'Dhaka', category: 'Newspapers', accessLevel: 'Public',
        additionalInfo: 'Published during the war.'
      },
      {
        id: 7, collectionNumber: 'COL007', accessionNumber: 'ACC007', collectionDate: '1971-08-05',
        contributorName: 'Freedom Fighter', objectType: 'Map', objectHead: 'Map — Movement Routes',
        description: 'Hand-drawn map of routes used by freedom fighters.', measurement: '40x60cm', images: ['/mnt/data/202410-mukti-cover.jpg'],
        galleryNumber: 'G7', foundPlace: 'Rajshahi', category: 'Maps', accessLevel: 'Public',
        additionalInfo: 'Used in strategic planning.'
      },
      {
        id: 8, collectionNumber: 'COL008', accessionNumber: 'ACC008', collectionDate: '1972-01-10',
        contributorName: 'Government', objectType: 'Object', objectHead: 'Personal Effects — Medals',
        description: 'Medals awarded to participants recognized post-war.', measurement: 'N/A', images: ['/mnt/data/202410-mukti-cover.jpg'],
        galleryNumber: 'G8', foundPlace: 'Dhaka', category: 'Objects', accessLevel: 'Public',
        additionalInfo: 'Awarded in 1972.'
      }
    ];
    setArtifacts(storedArtifacts);
    localStorage.setItem('artifacts', JSON.stringify(storedArtifacts));
  }, []);

  const addArtifact = (newArtifact: Artifact) => {
    const updated = [...artifacts, { id: artifacts.length, ...newArtifact }];
    setArtifacts(updated);
    localStorage.setItem('artifacts', JSON.stringify(updated));
  };

  const searchArtifacts = (type: string, value: string, category?: string): Artifact[] => {
    const lowerValue = value.toLowerCase();
    return artifacts.filter(a => {
      const matchesType = {
        'Collection No.': a.collectionNumber.toLowerCase().includes(lowerValue),
        'Accession No': a.accessionNumber.toLowerCase().includes(lowerValue),
        'Donor': a.contributorName.toLowerCase().includes(lowerValue),
        'Object Type': a.objectType.toLowerCase().includes(lowerValue),
        'Object Head': a.objectHead.toLowerCase().includes(lowerValue)
      }[type] || false;
      const matchesCategory = category ? a.category === category : true;
      return matchesType && matchesCategory;
    });
  };

  const updateArtifact = (id: number, updatedArtifact: Partial<Artifact>) => {
    const updated = artifacts.map(a => a.id === id ? { ...a, ...updatedArtifact } : a);
    setArtifacts(updated);
    localStorage.setItem('artifacts', JSON.stringify(updated));
  };

  const deleteArtifact = (id: number) => {
    const updated = artifacts.filter(a => a.id !== id);
    setArtifacts(updated);
    localStorage.setItem('artifacts', JSON.stringify(updated));
  };

  return (
    <ArtifactContext.Provider value={{ artifacts, addArtifact, searchArtifacts, updateArtifact, deleteArtifact }}>
      {children}
    </ArtifactContext.Provider>
  );
};