import React from 'react';
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

  return (
    <div className={styles.scrollView}>
      <NavigationRail />
      <main style={{ flexGrow: 1, paddingLeft: '80px' }}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Space School</h1>
            <div className={styles.headerRight}>

              <Button><FaUserCircle  color="#cfd8df" className={styles.profileIcon} /></Button>
              <IconButton
            sx={{
              width: "56px",
              height: "56px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFDAD7",
              "&:hover": {
                backgroundColor: "#FFDAD8",
              },
            }}
            onClick={() => handleIconClick(3, "/screens/Pagina3")} // Navega para a página 3
          >
            
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


