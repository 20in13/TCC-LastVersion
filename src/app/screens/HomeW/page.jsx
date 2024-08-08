import React from 'react';
import { FaRegCalendar, FaHeart, FaUserCircle } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import styles from './page.module.css';
// import NavigationRail from '../components/NavigationRail';

const HomeW = () => {
  return (
    <div className={styles.scrollView}>
      {/* <NavigationRail /> */}
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Space School</h1>
          <div className={styles.headerRight}>

            <FaUserCircle size={24} color="#3B0909" className={styles.profileIcon} />
          </div>
        </header>
        
        <SearchBar />

        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            {Array(24).fill().map((_, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeW;
