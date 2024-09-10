"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Rating } from "@mui/material";
import styles from "./page.module.css";
import LikeButton from "../../Card/LikeButton/page";
import { useSearchParams } from "next/navigation";

export default function Desc() {
  const [rating, setRating] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Biblioteca";
  const description = searchParams.get("description") || "Descrição padrão da biblioteca.";

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorited = favorites.includes(title);
    setIsFavorite(isFavorited);
  }, [title]);

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <Box className={styles.descriptionContainer}>
      <Typography variant="h5" component="h1" className={styles.title}>
        {title}{" "}
        <LikeButton
          onClick={handleToggleFavorite}
          isFavorite={isFavorite}
          localName={title}
        />
      </Typography>

      {/* Sistema de Avaliação */}
      <Rating
        name="avaliacao"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        size="large"
      />

      {/* Descrição passada como prop */}
      <Typography variant="h6">Descrição</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
}
