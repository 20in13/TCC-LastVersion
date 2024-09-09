// pages/Fav/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaUserCircle } from 'react-icons/fa';
import Card from '../../components/Card/page';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';
import { IconButton } from "@mui/material";
import ambientes from '../../../data/ambientes.json';

const Fav = () => {
  const router = useRouter();

  const goTo = () => {
    router.push('/screens/Perfil');
  };

  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    // Filtra os ambientes favoritos
    const favoriteAmbientes = ambientes.filter(local => favorites.includes(local.name));
    setFavoriteItems(favoriteAmbientes);
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
              {favoriteItems.map((local, index) => (
                <Card key={index} local={local} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fav;
