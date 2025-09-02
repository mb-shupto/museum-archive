// contexts/AuthContext.tsx
'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, password: string) => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Validate role
      if (parsedUser.role === 'admin' || parsedUser.role === 'user') {
        setUser(parsedUser as User);
      } else {
        setUser(null);
      }
    }
  }, []);

  const login = (email: string, password: string): boolean => {
  const validUser = { id: '1', name: 'Admin', email: 'admin@liberationmuseum.org', role: 'admin' } as const;
    if (email === 'admin@liberationmuseum.org' && password === 'password') {
      setUser(validUser);
      localStorage.setItem('user', JSON.stringify(validUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = (name: string, email: string, password: string): boolean => {
    if (!user && !localStorage.getItem('user')) {
  const newUser = { id: Date.now().toString(), name, email, role: 'user' } as const;
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};