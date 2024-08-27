"use client";

import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Card from '../../components/Card';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';

const HomeW = () => {
  // Simulando uma lista de itens com uma propriedade 'isFavorite'
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', isFavorite: true },
    { id: 2, name: 'Item 2', isFavorite: false },
    { id: 3, name: 'Item 3', isFavorite: true },
    { id: 4, name: 'Item 4', isFavorite: true },
    // Adicione mais itens conforme necessário
  ]);

  // Filtra os itens que são favoritos
  const favoriteItems = items.filter(item => item.isFavorite);

  return (
    <div className={styles.scrollView}>
      <NavigationRail />
      <main style={{ flexGrow: 1, paddingLeft: '80px' }}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Favoritos</h1>
            <div className={styles.headerRight}>
              <FaUserCircle size={24} color="#3B0909" className={styles.profileIcon} />
            </div>
          </header>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {favoriteItems.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeW;
