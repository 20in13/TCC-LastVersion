

import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import styles from './page.module.css';
import CalendarComponent from '../../calendario/page'


const Disp = () => {
  return (
    <Box className={styles.availabilityContainer}>
      <h6 className={styles.indi}>Indisponibilidades</h6>
      <CalendarComponent />
    </Box>
  );
};

export default Disp;
