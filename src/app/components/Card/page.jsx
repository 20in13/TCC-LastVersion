"use client";

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LikeButton from "./LikeButton/page";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import styles from './page.module.css';

export default function LibraryCard({ local, image, title, date, timeInicio, timeFim, onDelete, isSmallCard }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (local?.nome_ambiente) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const isFavorited = favorites.includes(local.nome_ambiente);
      setIsFavorite(isFavorited);
    }
  }, [local?.nome_ambiente]);

  const toggleFavorite = () => {
    if (local?.nome_ambiente) {
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
    if (local?.nome_ambiente && local?.description && local?.imagem_ambiente) {
      window.location.href = `/screens/Agendamento?title=${encodeURIComponent(local.nome_ambiente)}&description=${encodeURIComponent(local.description)}&img=${encodeURIComponent(local.imagem_ambiente)}`;
    }
  };

  const handleDeleteClick = () => {
    setOpen(true); // Abre o diálogo de confirmação
  };

  const handleClose = (confirm) => {
    setOpen(false);
    if (confirm) {
      onDelete(); // Executa a função de exclusão se confirmado
    }
  };

  if (isSmallCard) {
    return (
      <div className={styles.reservationCard}>
        <img src={image || local?.imagem_ambiente} alt={title} className={styles.cardImage} />
        <div className={styles.reservationDetails}>
          <h3 className={styles.h3_}>{title || local?.nome_ambiente}</h3>
          <p className={styles.pe}>{date || local?.date}</p>
          <p className={styles.pe}>{timeInicio || local?.timeInicio} - {timeFim || local?.timeFim}</p>
        </div>
        <button className={styles.deleteBtn} onClick={handleDeleteClick}>Excluir</button>

        {/* Caixa de diálogo de confirmação */}
        <Dialog
          open={open}
          onClose={() => handleClose(false)}
          PaperProps={{
            sx: {
              borderRadius: "16px", // Borda arredondada como na imagem
              padding: "16px", // Espaçamento interno
              textAlign: "left",
              backgroundColor: "#F4F3FA", // Cor de fundo igual à da imagem
            },
          }}
        >
          <DialogTitle sx={{ fontSize: "1.4rem", fontWeight: "500", color: "#1A1B21", textAlign: "left", }}>
            Você quer mesmo fazer isso?
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ color: "#666", fontSize: "0.9rem" }}>
              Essa ação não pode ser desfeita
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "flex-end" }}>
            <Button
              onClick={() => handleClose(false)}
              sx={{
                color: "#666",
                textTransform: "none",
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => handleClose(true)}
              sx={{
                fontWeight: "bold",
                color: "red",
                textTransform: "none",
              }}
            >
              Excluir
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } else {
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
            image={local?.imagem_ambiente}
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
              {local?.nome_ambiente || title}
            </Typography>
            <LikeButton onClick={toggleFavorite} isFavorite={isFavorite} localName={local?.nome_ambiente || title} />
          </CardContent>
        </Card>
      </Box>
    );
  }
}
