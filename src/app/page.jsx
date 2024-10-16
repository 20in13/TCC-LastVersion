"use client";

import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import InputComponent from './components/Input/page';
import { Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';  


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
      navigation.navigate('/screens/HomeW');
    } else {
      alert('Login ou senha incorretos');
    }
  };

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={`${styles.leftContainer}`}>
        <div className={styles.logoContainer2}>
          <Flex justifyContent="center" alignItems="center" width="100%" className={styles.carouselWrapper}>
            {/* Carrossel de imagens */}
            <Carousel
              showThumbs={false}
              showArrows={false}
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showStatus={false}
              emulateTouch={false}
              renderArrowPrev={(clickHandler, hasPrev, label) => (
                <button
                  type="button"
                  onClick={clickHandler}
                  className={styles.customArrowPrev}
                  aria-label={label}
                  disabled={!hasPrev}
                >
                  ❮
                </button>
              )}
              renderArrowNext={(clickHandler, hasNext, label) => (
                <button
                  type="button"
                  onClick={clickHandler}
                  className={styles.customArrowNext}
                  aria-label={label}
                  disabled={!hasNext}
                >
                  ❯
                </button>
              )}
            >
              <div>
                <Image src="/SpaceSchool.png" width={400} height={400} alt="Logo Grande" className={styles.logoGrande} />
                <Text className={styles.carouselText}>Bem-Vindo ao SpaceSchool</Text>
                {/* <Text className={styles.carouselSubtitle}>Grande é o Senhor e digno de ser louvado.</Text>
                <Text className={styles.carouselBible}>Salmos 145:3</Text> */}
              </div>
              <div>
                <Image src="/image2.jpg" width={400} height={400} alt="Slide 2" />
                <Text className={styles.carouselText}>OUTRA MENSAGEM AQUI</Text>
              </div>
              <div>
                <Image src="/image3.jpg" width={400} height={400} alt="Slide 3" />
                <Text className={styles.carouselText}>EXEMPLO DE TEXTO 3</Text>
              </div>
              <div>
                <Image src="/image4.jpg" width={400} height={400} alt="Slide 4" />
                <Text className={styles.carouselText}>EXEMPLO DE TEXTO 4</Text>
              </div>
            </Carousel>
          </Flex>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.logoContainer}>
          <Flex justifyContent="center" alignItems="center">
            <Image src="/SpaceSchool.png" width={100} height={100} className={styles.logo} />
          </Flex>
          <h2 className={styles.spaceSchool}>SpaceSchool</h2>
        </div>
        <InputComponent autoCapitalize="none" autoCorrect="off" />
        <button className={styles.loginButton}>
          <a href="/screens/HomeW" onClick={handleLogin}>
            <Text color="#FFF" fontSize={14} fontWeight={600} cursor="pointer">
              Login
            </Text>
          </a>
        </button>

        <Flex justifyContent="center" position="absolute" bottom="15">
          <Text>Não tem conta?</Text>
          <a href="/screens/Cadastro">
            <Text color="#CC3737" textDecoration="underline" fontSize={16} fontWeight={600} cursor="pointer" ml={2}>
              Cadastre-se
            </Text>
          </a>
        </Flex>
      </div>
    </div>
  );
};

export default LoginScreenW;