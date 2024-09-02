"use client";

import React, { useState } from 'react';
import { Box, Typography, Rating } from '@mui/material';
import styles from './page.module.css';
import LikeButton from '../../Card/LikeButton/page';

export default function Desc({ title, description }) {
  const [rating, setRating] = useState(0); // Estado para armazenar a avaliação do usuário

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

// Define defaultProps para usar como padrão
Desc.defaultProps = {
  title: 'Biblioteca',
  description: 'A biblioteca da escola é um espaço dedicado à promoção da educação, pesquisa e desenvolvimento intelectual dos alunos. Equipada com uma ampla variedade de livros, periódicos e recursos digitais, a biblioteca oferece um ambiente propício para o estudo individual e em grupo.',
};
