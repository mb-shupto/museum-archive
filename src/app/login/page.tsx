// app/login/page.tsx
'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
// ...removed MUI imports...
import { AuthContext, AuthProvider } from './../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <AuthProvider>
      <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} router={router} />
    </AuthProvider>
  );
}

function LoginForm({ email, setEmail, password, setPassword, router }: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  router: ReturnType<typeof useRouter>;
}) {
  const { login } = useContext(AuthContext)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="w-full mt-4 py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}