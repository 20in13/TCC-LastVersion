"use client";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./page.module.css";

export default function LikeButton({ onClick, isFavorite, localName }) {
  // Função para alternar o estado de favorito
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const newFavorites = favorites.filter((favName) => favName !== localName);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      favorites.push(localName);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    onClick(); // Chama a função de callback passada para atualizar o estado
  };

  return (
    <IconButton
      sx={{
        backgroundColor: "white",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        padding: "8px",
        border: "none",
        cursor: "pointer",
      }}
      className={styles.likeButton}
      onClick={(e) => {
        e.stopPropagation(); // Impede a propagação do clique para o Card
        toggleFavorite(); // Chama a função de alternar favorito
      }}
    >
      {isFavorite ? (
        <FavoriteIcon sx={{ color: "#FB4139" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
  );
}
