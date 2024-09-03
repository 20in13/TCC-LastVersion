import React, { forwardRef } from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './SearchBar.module.css';

const SearchBar = forwardRef((props, searchBarRef) => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <IoSearch size={20} color="#3B0909" className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Pesquisar..."
          {...props}
          ref={searchBarRef} 
        />
      </div>
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
