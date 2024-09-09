"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Rating } from '@mui/material';
import styles from './page.module.css';
import LikeButton from '../../Card/LikeButton/page';
import { useSearchParams } from 'next/navigation'; // Hook para capturar parâmetros da URL

export default function Desc() {
  const [rating, setRating] = useState(0); // Estado para armazenar a avaliação do usuário
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || 'Biblioteca';
  const description = searchParams.get('description') || 'Descrição padrão da biblioteca.';

  return (
    <Box className={styles.descriptionContainer}>
      <Typography variant="h5" component="h1" className={styles.title}>
        {title} <LikeButton /> 
      </Typography>

      {/* Sistema de Avaliação */}
      <Rating
        name="avaliacao"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue); // Atualiza o estado com o valor da avaliação
        }}
        size="large"
      />

      {/* Descrição passada como prop */}
      <Typography variant="h6">Descrição</Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </Box>
  );
}
