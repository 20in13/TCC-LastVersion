import React from 'react';
import { FaRegCalendar, FaHeart, FaUserCircle } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';
import { useSearchContext } from "../../../context/SearchContext"; 

export default function HomeW() {
  const { isSearchVisible } = useSearchContext();

  return (
    <div className={styles.scrollView}>
      <NavigationRail />
      <main style={{ flexGrow: 1, paddingLeft: '80px' }}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Space School</h1>
            <div className={styles.headerRight}>

              <FaUserCircle size={24} color="#F2F3FD" className={styles.profileIcon} />
            </div>
          </header>

          {isSearchVisible && <div><SearchBar /></div>}

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


