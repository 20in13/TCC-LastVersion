// components/LikeButton/page.js
"use client";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./page.module.css";

export default function LikeButton({ onClick, isFavorite }) {
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
        onClick(); // Executa a função de alternar favorito passada como prop
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
