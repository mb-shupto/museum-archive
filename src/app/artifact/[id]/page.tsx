'use client';

import React, { useState, useContext } from 'react';
import { useParams } from 'next/navigation';
import { ArtifactContext } from '../../../contexts/ArtifactContext';
import Modal from '../../../components/Modal';
import { Container, Typography, Button } from '@mui/material';
import { Artifact } from '../../../types/artifact';

export default function ArtifactDetail() {
  const { artifacts } = useContext(ArtifactContext);
  const { id } = useParams<{ id: string }>();
  const artifact = artifacts.find(a => a.id === parseInt(id || '0'));
  const [openModal, setOpenModal] = useState(false);

  if (!artifact) return <Typography>Artifact not found</Typography>;

  return (
    <Container>
      <Typography variant="h4" style={{ margin: '2rem 0' }}>{artifact.objectHead}</Typography>
      <Button onClick={() => setOpenModal(true)}>View Details</Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} artifactId={id || '0'} />
    </Container>
  );
}