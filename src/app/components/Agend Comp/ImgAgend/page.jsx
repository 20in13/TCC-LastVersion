"use client";

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import styles from './page.module.css';
import { useSearchParams } from 'next/navigation';

export default function ImgAgend() {
  const searchParams = useSearchParams();
  const img = searchParams.get('img') || '/Lab4.jpg'; // Usa o caminho local

  return (
    <Box className={styles.headerContainer}>
      <Image
        src={img}
        alt="Descrição da Imagem"
        fill
        className={styles.backgroundImage}
        style={{ objectFit: 'cover' }}
      />
    </Box>
  );
}
