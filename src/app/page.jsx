import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import InputComponent from './components/Input/page';
import { Box, Input, Button, Text, Flex } from '@chakra-ui/react';

const LoginScreenW = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Screen</title>
      </Head>
      <div className={styles.leftContainer}>
        <div className={styles.logoContainer2}>
          <Image src="/SpaceSchool.png" width={400} height={400} className={styles.logoGrande} />
          <h2 className={styles.bemvindo}>Bem-vindo ao Space School</h2>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.logoContainer}>
          <Image src="/SpaceSchool.png" width={100} height={100} className={styles.logo} />
          <h2 className={styles.spaceSchool}>SpaceSchool</h2>
        </div>
        <InputComponent
          type="password"
          autoCapitalize="none"
          autoCorrect="off"
        />
        <button className={styles.loginButton}>Login</button>
        <p className={styles.registerLink}>
          Não tem conta? <a href="#">Registre-se</a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreenW;