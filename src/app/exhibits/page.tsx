// app/exhibits/page.tsx
'use client';

import React from 'react';
// ...removed MUI imports...
import EducationalResources from './../components/EducationalResources';
import { AuthProvider } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Exhibits() {
  return (
    <AuthProvider>
      <div className="bg-blue-50 min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto py-20 px-4">
          <h1 className="text-3xl font-bold mb-8 text-black">Education Page</h1>
          <div className="text-black">
            <EducationalResources />
          </div>
        </div>
        <Footer/>
      </div>
    </AuthProvider>
  );
}