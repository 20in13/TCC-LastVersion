'use client'

import React, { useState } from "react";
import { Container, Grid, Box } from '@mui/material';
import Inputs from '../../components/Agend Comp/InputsAgend/page';
import Desc from '../../components/Agend Comp/Description/page';
import Disp from '../../components/Agend Comp/Dispo/page';
import NameList from '../../components/NameList/page'; // Importando o novo componente
import Tabela from '../../components/Tabela/page'; // Importando o componente da tabela
import ImgAgend from '../../components/Agend Comp/ImgAgend/page';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';
import { useMediaQuery, useTheme } from '@mui/material';


const Agend = () => {
  const [names, setNames] = useState([]);
  const theme = useTheme();
  const isAbove600px = useMediaQuery('(min-width:600px)');
  const addName = (name) => {
    if (names.length >= 20) {
      alert("O limite de 20 nomes foi atingido.");
      return;
    }
    setNames([...names, name]);
  };
  

  return (
    <main style={{ flexGrow: 1, paddingLeft: isAbove600px ? '80px' : '0' }}>
    <NavigationRail style={{zIndex:"0", position: "absolute"}}/>
      <ImgAgend style={{flex:"3"}}/>
      <Container className={styles.container}>
            <Desc />
            <Inputs names={names} addName={addName} />
            {/* <NameList names={names} /> */}
            <Tabela dados={names.map((name) => ({ nome: addedName.name, serie: addedName.itinerary }))} />
      </Container>
      </main>
  );
};

export default Agend;