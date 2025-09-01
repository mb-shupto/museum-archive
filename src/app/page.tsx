'use client';

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import ArchiveGrid from './components/ArchiveGrid';
import Timeline from './components/Timeline';
import EducationalResources from './components/EducationalResources';
import Footer from "./components/Footer";
import { ArtifactProvider } from './contexts/ArtifactContext';
import { AuthProvider } from './contexts/AuthContext';

export default function Home() {
  return (
    <AuthProvider>
      <ArtifactProvider>
        <Navbar />
        <HeroSection />
        <SearchSection />
        <ArchiveGrid />
        <Timeline />
        <EducationalResources />
        <Footer />
      </ArtifactProvider>
    </AuthProvider>
  );
}