// app/signup/page.tsx
'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Container, TextField, Button, Typography } from '@mui/material';
import { AuthContext } from './../contexts/AuthContext';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext)!;
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (register(name, email, password)) {
      router.push('/login');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <Container maxWidth="xs" style={{ paddingTop: '100px' }}>
      <Typography variant="h4" align="center" gutterBottom>Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" fullWidth style={{ marginTop: '20px' }}>Sign Up</Button>
      </form>
    </Container>
  );
}