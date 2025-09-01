// app/exhibits/page.tsx
'use client';

import React from 'react';
import { Container, Typography } from '@mui/material';
import EducationalResources from './../components/EducationalResources';
import { AuthProvider } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Exhibits() {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Container style={{ padding: '100px 0' }}>
          <Typography variant="h4">Education Page</Typography>
          <EducationalResources />
        </Container>
        <Footer/>
      </div>
    </AuthProvider>
  );
}