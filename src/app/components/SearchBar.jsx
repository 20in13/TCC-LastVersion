import React from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <IoSearch size={20} color="#3B0909" className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Pesquisar..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
