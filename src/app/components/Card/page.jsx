"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LikeButton from "./LikeButton/page";

export default function LibraryCard({ local }) {

  const handleCardClick = () => {
    window.location.href = "/screens/Agendamento";
  };

  return (
    <Box onClick={handleCardClick} sx={{ cursor: "pointer", display: "inline-block", paddingBottom:"3rem" }}>
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
          image={local.image} 
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
          <Typography 
            variant="h7" 
            component="div" 
            sx={{ flexGrow: 1 }}>
              {local.name}
          </Typography>
          <LikeButton />
          
        </CardContent>
      </Card>
    </Box>
  );
}

LibraryCard.defaultProps = {
  local: {
    name: 'Biblioteca',
    image: '/biblioteca.png',
  },
};

