"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import Card from '../../components/Card/page';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';
import { IconButton, Typography } from "@mui/material";
import ambientes from '../../../data/ambientes.json';

export default function Fav ({ user }) {
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
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {favoriteItems.length === 0 ? (
                <Typography variant="h6" align="center" color="textSecondary">
                  Nenhum Favorito Adicionado
                </Typography>
              ) : (
                favoriteItems.map((local, index) => (
                  <Card key={index} local={local} isSmallCard={false} />
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Fav.defaultProps = {
  user: {
    name: 'Fulano da Silva',
    email: 'fulano.silva737@gmail.com',
    image: '/perfilVitu.jpg',
  },
};