import React from 'react';
import { Box, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from './page.module.css';

const Description = () => {
  return (
    <Box className={styles.descriptionContainer}>
      <Typography variant="h5" component="h1" className={styles.title}>
        Biblioteca
      </Typography>
      <FavoriteBorderIcon />
      <Typography variant="h6">Descrição</Typography>
      <Typography variant="body2">
        A biblioteca da escola é um espaço dedicado à promoção da educação, pesquisa e desenvolvimento intelectual dos alunos...
      </Typography>
    </Box>
  );
};

export default Description;
