"use client";

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LikeButton from "./LikeButton/page";
import ReservationCard from "../reservCard/page";
import styles from './page.module.css';

export default function LibraryCard({ local, image, title, date, onDelete, isSmallCard }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (local?.name) { // Verifica se local e local.name existem
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const isFavorited = favorites.includes(local.name);
      setIsFavorite(isFavorited);
    }
  }, [local?.name]);

  const toggleFavorite = () => {
    if (local?.name) { // Verifica se local e local.name existem antes de manipular favoritos
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      
      if (isFavorite) {
        const newFavorites = favorites.filter((favName) => favName !== local.name);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setIsFavorite(false);
      } else {
        favorites.push(local.name);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavorite(true);
      }
    }
  };

  const handleCardClick = () => {
    if (local?.name && local?.description && local?.image) {
      window.location.href = `/screens/Agendamento?title=${encodeURIComponent(local.name)}&description=${encodeURIComponent(local.description)}&img=${encodeURIComponent(local.image)}`;
    }
  };

  if (isSmallCard) {
    return (
      <div className={styles.reservationCard}>
      <img src={image || local?.image} alt={title} className={styles.cardImage} />
      <div className={styles.reservationDetails}>
        <h3 className={styles.h3_}>{title || local?.name}</h3>
        <p className={styles.pe}>{date || local?.date}</p>
      </div>
      <button className={styles.deleteBtn} onClick={onDelete}>Excluir</button>
    </div>
    );
  } else {
    // Renderiza ReservationCard se o card for pequeno
    return (
      <Box onClick={handleCardClick} sx={{ cursor: "pointer", display: "inline-block", paddingBottom: "3rem" }}>
        <Card
          sx={{
            width: 250,
            height: 200,
            borderRadius: "16px",
            backgroundColor: "#F4F3FA",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            position: "relative",
            overflow: "visible",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={local?.image || image}
            alt="Imagem"
            sx={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "8px 16px",
              alignItems: "center",
            }}
          >
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
              {local?.name || title}
            </Typography>
            <LikeButton onClick={toggleFavorite} isFavorite={isFavorite} localName={local?.name || title} />
          </CardContent>
        </Card>
      </Box>
    );
  }
}
