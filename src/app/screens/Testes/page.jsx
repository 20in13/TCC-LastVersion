import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import Header from '../../components/TESTES/Header/page';
import Description from '../../components/TESTES/Description/page';
import BookingForm from '../../components/TESTES/BookingForm/page';
import Availability from '../../components/TESTES/Avaliability/page';
import styles from './page.module.css';

const Agend = () => {
  return (
    <div  className={styles.temp}>
      <Header />
      <Container maxWidth="lg" className={styles.temp}>
        <div className={styles.mainContainer}>
          <div className={styles.gridContainer}>
            <Description />
            <BookingForm />
            <Availability />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Agend;