import React from 'react';
import { FaCalendarAlt, FaHome, FaSearch, FaUserCircle } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <FaUserCircle size={40} color="white" />
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.navItem}>
          <FaCalendarAlt size={30} />
          <span>Início</span>
        </a>
        <a href="#" className={styles.navItem}>
          <FaHome size={30} />
          <span>Favoritos</span>
        </a>
        <a href="#" className={styles.navItem}>
          <FaSearch size={30} />
          <span>Pesquisar</span>
        </a>
      </nav>
      <div className={styles.profile}>
        <FaUserCircle size={40} />
      </div>
    </div>
  );
};

export default Sidebar;