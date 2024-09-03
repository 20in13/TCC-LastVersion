

import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import styles from './page.module.css';
import CalendarComponent from '../../calendario/page'


const Disp = () => {
  return (
    <Box className={styles.availabilityContainer}>
      <CalendarComponent />
    </Box>
  );
};

export default Disp;
