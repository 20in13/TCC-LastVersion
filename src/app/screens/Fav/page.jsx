// pages/screens/Fav.js
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaUserCircle } from 'react-icons/fa';
import Card from '../../components/Card/page';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';
import { IconButton } from "@mui/material";

const Fav = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState([]);

  const goTo = () => {
    router.push('/screens/Perfil');
  };

  // Carrega os favoritos do Local Storage ao montar o componente
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className={styles.scrollView}>
      <NavigationRail />
      <main style={{ flexGrow: 1, paddingLeft: '80px' }}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Favoritos</h1>
            <div className={styles.headerRight}>
              <IconButton onClick={goTo}>
                <FaUserCircle className={styles.profileIcon} />
              </IconButton>
            </div>
          </header>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {favorites.length > 0 ? (
                favorites.map((local, index) => (
                  <Card key={index} local={local} />
                ))
              ) : (
                <p>Nenhum item favorito.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fav;
