// app/timeline/page.tsx
'use client';

import React from 'react';
// ...removed MUI imports...
import Timeline from './../components/Timeline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthProvider } from '../contexts/AuthContext';
import { ArtifactProvider } from '../contexts/ArtifactContext';

export default function TimelinePage() {
  return (
    <AuthProvider>
      <ArtifactProvider>
        <Navbar />
        <div className="bg-blue-50 min-h-screen">
          <div className="max-w-4xl mx-auto py-20 px-4">
            <h1 className="text-3xl font-bold mb-8 text-black">Timeline Page</h1>
            <Timeline />
          </div>
          <Footer />
        </div>
      </ArtifactProvider>
    </AuthProvider>
  );
}