// components/Navbar.tsx
'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)!;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Archives', href: '/search' },
    { text: 'Exhibits', href: '/exhibits' },
    { text: 'Timeline', href: '/timeline' },
    { text: 'Education', href: '/education' },
    { text: 'Virtual Tour', href: '/virtual-tour' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
  <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white z-50 shadow-lg font-sans">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="font-extrabold text-2xl tracking-tight drop-shadow">Liberation War Museum</div>
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link key={item.text} href={item.href} className="px-3 py-2 rounded hover:bg-blue-700 hover:text-white transition font-medium">
              {item.text}
            </Link>
          ))}
          {user ? (
            <button onClick={logout} className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-400 text-white font-semibold transition">Logout</button>
          ) : (
            <>
              <Link href="/login" className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-400 text-white font-semibold transition">Login</Link>
              <Link href="/signup" className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-400 text-white font-semibold transition">Sign Up</Link>
            </>
          )}
        </div>
        <button
          className="md:hidden text-white focus:outline-none rounded-full bg-blue-700 p-2 hover:bg-blue-600 transition"
          aria-label="Open menu"
          onClick={handleDrawerToggle}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50" onClick={handleDrawerToggle} />
      )}
      <div className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white shadow-2xl z-50 transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 rounded-l-xl overflow-hidden`}>
        <div className="flex flex-col p-8 space-y-6">
          <button className="self-end mb-2 text-white hover:text-blue-300 text-2xl" aria-label="Close menu" onClick={handleDrawerToggle}>&times;</button>
          {menuItems.map((item) => (
            <Link key={item.text} href={item.href} className="px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition font-medium" onClick={handleDrawerToggle}>
              {item.text}
            </Link>
          ))}
          {user ? (
            <button onClick={() => { logout(); handleDrawerToggle(); }} className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-400 text-white font-semibold transition">Logout</button>
          ) : (
            <>
              <Link href="/login" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-400 text-white font-semibold transition" onClick={handleDrawerToggle}>Login</Link>
              <Link href="/signup" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-400 text-white font-semibold transition" onClick={handleDrawerToggle}>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;