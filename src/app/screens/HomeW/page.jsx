"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaUserCircle } from 'react-icons/fa';
import Card from '../../components/Card/page';
import SearchBar from '../../components/SearchBar';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';
import { IconButton } from "@mui/material";
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';

// Importar o arquivo JSON
import ambientes from '../../../data/ambientes.json';

export default function HomeW({ user }) {

  const router = useRouter();

  const goTo = () => {
    router.push('/screens/Perfil');
  };

  const theme = useTheme();
  const isAbove600px = useMediaQuery('(min-width:600px)');

  return (
    <div className={styles.scrollView}>
      <NavigationRail />
      <main style={{ flexGrow: 1, paddingLeft: isAbove600px ? '80px' : '0' }}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Space School</h1>
            <div className={styles.headerRight}>
              <IconButton onClick={goTo}>
                {user.image ? (
                  <Image
                  src={user.image || '/img/default-avatar.png'}
                  alt="Profile Avatar"
                  width={50}
                  height={50}
                  className={styles.smallAvatar}
                  />
                ) : (
                  <FaUserCircle className={styles.profileIcon} />
                  )}
              </IconButton>
            </div>
          </header>

          <SearchBar />

          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {ambientes.map((local, index) => (
                <Card key={index} local={local} isSmallCard={false} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

HomeW.defaultProps = {
  user: {
    name: 'Fulano da Silva',
    email: 'fulano.silva737@gmail.com',
    image: '/perfilVitu.jpg',
  },
}