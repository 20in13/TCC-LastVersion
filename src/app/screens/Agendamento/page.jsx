'use client'
import React, { useState } from "react";
import { Container, Grid, Box } from '@mui/material';
import Inputs from '../../components/Agend Comp/InputsAgend/page';
import Desc from '../../components/Agend Comp/Description/page';
import Disp from '../../components/Agend Comp/Dispo/page';
import NameList from '../../components/NameList/page'; // Importando o novo componente
import ImgAgend from '../../components/Agend Comp/ImgAgend/page';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';


const Agend = () => {
  const [names, setNames] = useState([]);

  return (
    <main style={{ paddingLeft: '80px' }}>
    <NavigationRail />
      <ImgAgend />
      <Container className={styles.container}>
            <Desc />
            <Inputs names={names} setNames={setNames}/>
            <NameList names={names} />
      </Container>
      </main>
  );
};

export default Agend;