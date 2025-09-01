// app/timeline/page.tsx
'use client';

import React from 'react';
import { Container, Typography } from '@mui/material';
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
        <Container style={{ padding: '100px 0' }}>
          <Typography variant="h4">Timeline Page</Typography>
          <Timeline />
        </Container>
        <Footer />
      </ArtifactProvider>
    </AuthProvider>
  );
}