import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import InputComponent from './components/Input/page';
import { Flex, Text } from '@chakra-ui/react'

const LoginScreenW = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Screen</title>
      </Head>
      <div className={styles.leftContainer}>
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
          type="password"
          autoCapitalize="none"
          autoCorrect="off"
        />
        <button className={styles.loginButton}>
          <a href="/screens/HomeW">
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

        <p className={styles.registerLink}>
 
          Não tem conta? 
        </p>
            <a href="/screens/Cadastro">
            <Text
              color="#CC3737"
              textDecoration="underline"
              fontSize={16}
              fontWeight={600}
              cursor="pointer"
            >
          Cadastre-se
            </Text>
            </a>
      </div>
    </div>
  );
};

export default LoginScreenW;