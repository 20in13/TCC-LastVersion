// src/context/SearchContext.jsx
"use client";

import React, { createContext, useContext, useState } from "react";

// Cria o contexto de pesquisa
const SearchContext = createContext();

// Hook personalizado para usar o contexto de pesquisa
export const useSearchContext = () => {
  return useContext(SearchContext);
};

// Provedor de contexto de pesquisa
export const SearchProvider = ({ children }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <SearchContext.Provider value={{ isSearchVisible, setIsSearchVisible }}>
      {children}
    </SearchContext.Provider>
  );
};
