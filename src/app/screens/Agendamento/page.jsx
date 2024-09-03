import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import Inputs from '../../components/TESTES/InputsAgend/page';
import Desc from '../../components/TESTES/Description/page';
import Disp from '../../components/TESTES/Dispo/page';
import ImgAgend from '../../components/TESTES/ImgAgend/page';
import styles from './page.module.css';

const Agend = () => {
  return (
    <>
      <ImgAgend />
      <Container className={styles.temp}>
            <Desc />
            <Inputs />
            <Disp />

      </Container>
    </>
  );
};

export default Agend;