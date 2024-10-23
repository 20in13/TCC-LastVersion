"use client";

import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import InputComponent from './components/Input/page';
import AlertComponent from './components/alertLogin/page'; // Importe o novo componente
import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import for useRouter in App Router
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const LoginScreenW = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [username, setUsername] = useState(''); // Gerenciar estados para username
  const [password, setPassword] = useState(''); // Gerenciar estados para password
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar o alerta
  const router = useRouter(); // Hook para navegação

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    window.addEventListener('resize', checkIfMobile);
    checkIfMobile();

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault(); // Previna o comportamento padrão
    if (username === '20in.nascimento.13@gmail.com' && password === 'testeteste') {
      router.push('/screens/HomeW'); // Redireciona usando router.push
    } else {
      setShowAlert(true); // Mostra o alerta se login for incorreto
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
            <Carousel
              showThumbs={false}
              showArrows={false}
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showStatus={false}
              emulateTouch={false}
            >
              <div>
                <Image src="/SpaceSchool.png" width={400} height={400} alt="Logo Grande" className={styles.logoGrande} />
                <Text className={styles.carouselText}>Bem-Vindo ao SpaceSchool</Text>
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

        {/* Inputs de username e password com estados controlados */}
        <InputComponent
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Captura do username
          autoCapitalize="none"
          autoCorrect="off"
          placeholder="E-mail"
        />
        <InputComponent
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Captura do password
          autoCapitalize="none"
          autoCorrect="off"
          placeholder="Senha"
          type="password"
        />

        <button className={styles.loginButton} onClick={handleLogin} cursor="pointer">          
          <Text color="#FFF" fontSize={14} fontWeight={600} cursor="pointer">
            Login
          </Text>
        </button>

        {/* Exibir alerta se houver erro de login */}
        {showAlert && (
          <Flex justifyContent="center" mt={4}>
            <AlertComponent message="Login ou senha incorretos" onClose={() => setShowAlert(false)} />
          </Flex>
        )}

        <Flex justifyContent="center" position="absolute" bottom="15" cursor="help">
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
