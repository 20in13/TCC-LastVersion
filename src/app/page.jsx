"use client";

import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import InputComponent from './components/Input/page';
import { Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';


const LoginScreenW = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para verificar se a tela é mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    // Adicione o event listener para redimensionar
    window.addEventListener('resize', checkIfMobile);

    // Verifique o tamanho da tela ao carregar
    checkIfMobile();

    // Remova o event listener ao desmontar
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleLogin = () => {
    if (username === '20in.nascimento.13@gmail.com' && password === 'a') {
      navigation.navigate('HomePage');
    } else {
      alert('Login ou senha incorretos');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login Screen</title>
      </Head>
      <div className={`${styles.leftContainer} ${isMobile ? styles.hiddenOnMobile : ''}`}>
        <div className={styles.logoContainer2}>
          <Flex justifyContent="center" alignItems="center">
            <Image src="/SpaceSchool.png" width={400} height={400} className={styles.logoGrande} />
          </Flex>
          <h2 className={styles.bemvindo}>Bem-vindo ao Space School</h2>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.logoContainer}>
          <Flex justifyContent="center" alignItems="center">
            <Image src="/SpaceSchool.png" width={100} height={100} className={styles.logo} />
          </Flex>
          <h2 className={styles.spaceSchool}>SpaceSchool</h2>
        </div>
        <InputComponent
          autoCapitalize="none"
          autoCorrect="off"
        />
        <button className={styles.loginButton}>
          <a href="/screens/HomeW" onPress={handleLogin}>
            <Text
              color="#FFF"
              fontSize={14}
              fontWeight={600}
              cursor="pointer"

            >
              Login
            </Text>
            </a>
          </button>

          <Flex justifyContent="center" position="absolute" bottom="15">
          <Text>Não tem conta?</Text>
          <a href="/screens/Cadastro">
            <Text
              color="#CC3737"
              textDecoration="underline"
              fontSize={16}
              fontWeight={600}
              cursor="pointer"
              ml={2}
            >
              Cadastre-se
            </Text>
          </a>
        </Flex>

      </div>
    </div>
  );
};

export default LoginScreenW;