import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import styles from './page.module.css';

const Disp = () => {
  return (
    <Box className={styles.availabilityContainer}>
      <Typography variant="h6">Disponibilidade</Typography>
      <Typography variant="subtitle2">22 Segunda-feira</Typography>
      <List>
        <ListItem>13:00 - Ocupado</ListItem>
        <ListItem>14:00</ListItem>
        {/* Adicione mais horários conforme necessário */}
      </List>
    </Box>
  );
};

export default Disp;