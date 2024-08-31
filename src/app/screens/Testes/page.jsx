"use client";

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";

export default function LibraryCard({ local }) {
  const [liked, setLiked] = useState(false);

  const handleCardClick = () => {
    window.location.href = "/screens/Agendamento";
  };

  return (
    <Box onClick={handleCardClick} sx={{ cursor: "pointer", display: "inline-block" }}>
      <Card
        sx={{
          width: 250,
          height: 200,
          borderRadius: "16px",
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
          
          <IconButton
            sx={{
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              padding: "8px",
            }}
            onClick={(e) => {
              e.stopPropagation(); // Impede a propagação do clique para o Card
              setLiked(!liked); // Alterna o estado de "Liked"
            }}
          >
            {liked ? (
              <FavoriteIcon sx={{ color: "#FB4139" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
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

