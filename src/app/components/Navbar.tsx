// components/Navbar.tsx
'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)!;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
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
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50 shadow">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="font-bold text-lg">Liberation War Museum</div>
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link key={item.text} href={item.href} className="hover:text-blue-300 transition">
              {item.text}
            </Link>
          ))}
          {user ? (
            <button onClick={logout} className="hover:text-blue-300 transition">Logout</button>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-300 transition">Login</Link>
              <Link href="/signup" className="hover:text-blue-300 transition">Sign Up</Link>
            </>
          )}
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={handleDrawerToggle} />
      )}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white text-blue-900 shadow-lg z-50 transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <div className="flex flex-col p-6 space-y-4">
          {menuItems.map((item) => (
            <Link key={item.text} href={item.href} className="hover:text-blue-700 transition" onClick={handleDrawerToggle}>
              {item.text}
            </Link>
          ))}
          {user ? (
            <button onClick={() => { logout(); handleDrawerToggle(); }} className="hover:text-blue-700 transition">Logout</button>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-700 transition" onClick={handleDrawerToggle}>Login</Link>
              <Link href="/signup" className="hover:text-blue-700 transition" onClick={handleDrawerToggle}>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;