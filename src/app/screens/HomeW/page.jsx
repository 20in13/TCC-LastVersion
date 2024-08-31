"use client"

import React from 'react';
import { useRouter } from 'next/navigation'; // Use o hook da nova API
import { FaRegCalendar, FaHeart, FaUserCircle } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';
import { Button } from '@chakra-ui/react';
import { IconButton } from "@mui/material";

export default function HomeW() {
  const router = useRouter();

  const navigateToPagina3 = () => {
    router.push('/screens/Perfil'); 
  };

  return (
    <div className={styles.scrollView}>
      <NavigationRail />
      <main style={{ flexGrow: 1, paddingLeft: '80px' }}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Space School</h1>
            <div className={styles.headerRight}>
              <IconButton onClick={navigateToPagina3}> {/* Adiciona a função de clique */}
                <FaUserCircle className={styles.profileIcon} />
              </IconButton>
            </div>
          </header>

          <SearchBar />

          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {Array(25).fill().map((_, index) => (
                <Card key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

