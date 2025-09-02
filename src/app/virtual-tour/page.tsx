// app/virtual-tour/page.tsx
'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthProvider } from '../contexts/AuthContext';

export default function VirtualTour() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
  <main className="flex-grow flex items-center justify-center px-4 pt-20">
          <section className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-blue-900">Virtual Museum Tour</h1>
            <p className="text-gray-700 mb-6">
              Explore the Liberation War Museum from anywhere! Our interactive virtual tour lets you walk through exhibits, view artifacts, and experience history in a whole new way.
            </p>
            <div className="flex flex-col gap-4 items-center">
              <button className="px-6 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors">Start Virtual Tour</button>
              <span className="text-gray-400 text-sm">(Feature coming soon)</span>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}