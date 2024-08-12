"use client";

import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { MdToday } from 'react-icons/md';
import styles from './page.module.css'; // CSS Modules

const NavigationRail = () => {
  const router = useRouter();
  const [tela, setTela] = useState('Home');

  const goToFavoritePage = () => {
    router.push('/fav');
  };

  const telaSel = (atual) => {
    setTela(atual);
    // Implementar navegação baseada em tela
    if (atual === 'Home') router.push('/');
    if (atual === 'Favoritos') router.push('/fav');
    if (atual === 'Pesquisar') router.push('/search');
  };

  return (
    <div className={styles.navrail}>
      <img
        src="/assets/SpaceSchool.png"
        alt="Logo"
        className={styles.logo}
      />

      <button className={styles.butagend}>
        <MdToday size={25} className={styles.iconesLista} />
      </button>

      <ul className={styles.lista}>
        <li className={styles.itemlista}>
          <button onClick={() => telaSel('Home')} className={styles.button}>
            <div className={tela === 'Home' ? styles.selecionadoLista : styles.nselecionadoLista}>
              <IoMdHome size={26} className={styles.iconesLista} />
            </div>
            <span className={styles.textoLista}>Home</span>
          </button>
        </li>

        <li className={styles.itemlista}>
          <button onClick={() => telaSel('Favoritos')} className={styles.button}>
            <div className={tela === 'Favoritos' ? styles.selecionadoLista : styles.nselecionadoLista}>
              <FaHeart size={22} className={styles.iconesLista} />
            </div>
            <span className={styles.textoLista}>Favoritos</span>
          </button>
        </li>

        <li className={styles.itemlista}>
          <button onClick={() => telaSel('Pesquisar')} className={styles.button}>
            <div className={tela === 'Pesquisar' ? styles.selecionadoLista : styles.nselecionadoLista}>
              <IoSearch size={25} className={styles.iconesLista} />
            </div>
            <span className={styles.textoLista}>Pesquisar</span>
          </button>
        </li>
      </ul>

      <div className={styles.usuario}>
        <FaUserCircle size={40} color="#3B0909" />
      </div>
    </div>
  );
};

export default NavigationRail;
