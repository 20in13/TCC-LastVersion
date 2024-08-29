// components/LibraryCard.js
"use client"; // se você estiver usando Next.js 13 com App Router

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Box from "@mui/material/Box";

export default function LibraryCard() {
    const [liked, setLiked] = useState(false);

  return (
    <Card
      sx={{
        width: 300, // ajuste conforme necessário
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "visible",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image="/biblioteca.png"
        alt="Imagem"
        sx={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
      />
      <CardContent
        sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "8px 16px",
          }}
        >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Biblioteca
        </Typography>
        <IconButton
        sx={{
            backgroundColor: "white", // Cor de fundo do círculo
            borderRadius: "50%", // Forma circular
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            padding: "8px",
        }}
        onClick={() => setLiked(!liked)}
        >
          {liked ? ( 
            <FavoriteIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardContent>
    </Card>
  );
}
