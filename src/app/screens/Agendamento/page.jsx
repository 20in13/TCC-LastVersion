import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import Inputs from '../../components/Agend Comp/InputsAgend/page';
import Desc from '../../components/Agend Comp/Description/page';
import Disp from '../../components/Agend Comp/Dispo/page';
import ImgAgend from '../../components/Agend Comp/ImgAgend/page';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';

const Agend = () => {
  return (
    <main style={{ paddingLeft: '80px' }}>
    <NavigationRail />
      <ImgAgend />
      <Container className={styles.container}>
            <Desc />
            <Inputs />
            <Disp />
      </Container>
      </main>
  );
};

export default Agend;