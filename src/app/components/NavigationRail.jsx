"use client";

import React, {} from 'react';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import { IoMdHome, IoSearch } from 'react-icons/io';
import { MdToday } from 'react-icons/md';
import styles from './NavigationRail.module.css';
import Image from 'next/image';
import Logo from '../../../public/SpaceSchool.png';

const NavigationRail = () => {

  return (
    <div className={styles.navrail}>
      {/* <Image
        src={Logo}
        alt="Space School Logo"
        className={styles.logo}
      /> */}

      <button className={styles.butagend}>
        <MdToday size={25} className={styles.iconesLista} />
      </button>

      <ul className={styles.lista}>
        <li className={styles.itemlista}>
          <button>
            <div >
              <IoMdHome size={26} className={styles.iconesLista} />
            </div>
            <span className={styles.textoLista}>Home</span>
          </button>
        </li>

        <li className={styles.itemlista}>
          <button>
            <div>
              <FaHeart size={22} className={styles.iconesLista} />
            </div>
            <span className={styles.textoLista}>Favoritos</span>
          </button>
        </li>

        <li className={styles.itemlista}>
          <button>
            <div>
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
