'use client'

import React from 'react';
import styles from './page.module.css';
import styled from 'styled-components';
import Image from 'next/image';
import CalendarComponent from '../../components/calendario/page'
import NavigationRail from '../../components/NavRail/page';

const Tela2 = () => {
  const text = 'A biblioteca da escola é um espaço dedicado à promoção da educação, pesquisa e desenvolvimento intelectual dos alunos. Equipada com uma ampla variedade de livros, periódicos e recursos digitais, a biblioteca oferece um ambiente propício para o estudo individual e em grupo.';
  const StyledInput = styled.input`
    border: 2px solid #1A1B21;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    width: 85%;
    height: 25%;
    margin: 2%;
  `;
  const StyledInput2 = styled.input`
    border: 2px solid #1A1B21;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    width: 49rem;
    height: 100%;
    margin: 2%;
    margin-left:-0.5rem;
  `;

  const NameInputContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 4%;     
  `;

  const NameButton = styled.button`
    margin-left: -5rem;
    padding: 8px ;
    font-size: 26px;
    border: 2px solid #fff;
    border-radius: 40px;
    background-color: #fff;
    cursor: pointer;


  `;

  return (
    <div className={styles.scrollView}>
      <NavigationRail />
      <main style={{ flexGrow: 1, paddingLeft: '80px' }}>

      <div className={styles.container}>

        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.column}>
              <div className={styles.texto2}>
                <h1 className={styles.title}>Biblioteca <span role="img" aria-label="coracao">♡</span></h1>
                <h1 className={styles.title2}>★ ★ ★ ☆ ☆</h1>
                <h2 className={styles.desc}>Descrição</h2>
                <p className={styles.lors}>{text}</p>
              </div>
              <div className={styles.row}>
                <NameInputContainer>
                  <StyledInput2 type="name" placeholder='Nomes' />
                  <NameButton>+</NameButton>
                </NameInputContainer>
                <StyledInput type="date" />
                <StyledInput type="time" />
                <StyledInput type="time" />
                <button className={styles.button}>Finalizar Agendamento</button>
              </div>
              <div className={styles.column}>
                  <div className={styles.centro}>
                  <div className={styles.disponivel}><h1>Disponibilidade</h1></div>
                  <CalendarComponent />
                  </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Tela2;