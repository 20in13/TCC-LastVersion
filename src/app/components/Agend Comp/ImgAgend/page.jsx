import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import styles from './page.module.css';

export default function ImgAgend({ img }) {
  return (
    <Box className={styles.headerContainer}>
      <Image
        src={img} // 
        alt="Descrição da Imagem"
        fill // Faz a imagem preencher o container
        className={styles.backgroundImage} // Aplica a classe de estilo para posicionamento
        style={{ objectFit: 'cover' }} // Mantém a imagem proporcional enquanto cobre o container
      />
    </Box>
  );
}

// Define defaultProps para usar apenas uma string
ImgAgend.defaultProps = {
  img: '/biblioteca.png',
};
  