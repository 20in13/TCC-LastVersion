"use client";

import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import InputComponent from './components/Input/page';
import AlertComponent from './components/alertLogin/page'; // Importe o novo componente
import { Flex, Text, Spinner, Center } from '@chakra-ui/react'; // Adicionei Center para centralizar o loading maior
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import for useRouter in App Router
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import api from '../services/api';

const LoginScreenW = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [username, setUsername] = useState(''); // Gerenciar estados para username
  const [password, setPassword] = useState(''); // Gerenciar estados para password
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar o alerta
  const [isLoading, setIsLoading] = useState(false); // Estado para loading
  const router = useRouter(); // Hook para navegação

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    window.addEventListener('resize', checkIfMobile);
    checkIfMobile();

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // const handleLogin = async (e) => {
  //   e.preventDefault(); // Previna o comportamento padrão
  //   setIsLoading(true); // Inicia o loading
  //   setShowAlert(false); // Reseta o alerta

  //   // Simulação de requisição (você pode trocar pelo seu fetch/axios)
  //   setTimeout(() => {
  //     if (username === '20in.nascimento.13@gmail.com' && password === 'testeteste') {
  //       router.push('/screens/HomeW'); // Redireciona usando router.push
  //     } else {
  //       setShowAlert(true); // Mostra o alerta se login for incorreto
  //     }
  //     setIsLoading(false); // Para o loading
  //   }, 1000); // Simulação de 2 segundos
  // };

  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão
    setIsLoading(false); // Inicia o loading
    setShowAlert(false); // Reseta o alerta
  
    try {
      // Substitua o endpoint pelo caminho correto da sua API
      const response = await api.post('/usuario/login', {
        email_usu: username, // Campo esperado pela API
        senha_usu: password, // Campo esperado pela API
      });
  
      if (response.data.sucesso) {
        // Login bem-sucedido
        router.push('/screens/HomeW'); // Redireciona para a página inicial
      } else {
        // Login falhou
        setShowAlert(true); // Mostra mensagem de erro
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      setShowAlert(true); // Mostra o alerta se houver erro na conexão
    } finally {
            setIsLoading(true); // Para o loading
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
                <Text className={styles.carouselSubtitle}>Um site feito para a sua escola</Text>
              </div>
              <div>
                <Image src="/agenda.png" width={5000} height={3333} alt="Slide 2" className={styles.imgCarroussel} />
                <Text className={styles.carouselText}>Agenda</Text>
                <Text className={styles.carouselSubtitle}>Todos os detalhes das reservas na palma de sua mão</Text>
              </div>
              <div>
                <Image src="/organização.png" width={5000} height={5000} alt="Slide 3" className={styles.imgCarroussel3} />
                <Text className={styles.carouselText}>Organização</Text>
                <Text className={styles.carouselSubtitle}>Mantenha as informações de Agendamento centrados em um só lugar</Text>
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
        <div className={styles.input}>
          <InputComponent
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Captura do username
            autoCapitalize="none"
            autoCorrect="off"
            placeholder="E-mail"
          />
        </div>
        <div className={styles.input}>
          <InputComponent
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Captura do password
            autoCapitalize="none"
            autoCorrect="off"
            placeholder="Senha"
            type="password"
            mb={20}
          />
          <Flex justifyContent="flex-end" w="100%" mb={20} cursor="help">
            <Text
              color="#CC3737"
              textDecoration="underline"
              fontSize={15}
              fontWeight={600}
              cursor="pointer"
            >
              Esqueceu a senha?
            </Text>
          </Flex>
        </div>

        {/* Botão de login com loading */}
        <button className={styles.loginButton} onClick={handleLogin} disabled={isLoading}>
        {isLoading ? (
          <Center>
            <Flex direction="column" align="center">
            <Spinner width="10px" height="10px" color="#FFF" />
            </Flex>
          </Center>
        ) : (
          <Text color="#FFF" fontSize={14} fontWeight={600}>
            Login
          </Text>
        )}

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
