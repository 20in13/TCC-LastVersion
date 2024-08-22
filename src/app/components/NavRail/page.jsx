"use client"

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import EventIcon from '@mui/icons-material/Event'; // Ícone de agenda
import HomeIcon from '@mui/icons-material/Home'; // Ícone de casa
import FavoriteIcon from '@mui/icons-material/Favorite'; // Ícone de coração
import SearchIcon from '@mui/icons-material/Search'; // Ícone de lupa
import PersonIcon from '@mui/icons-material/Person'; // Ícone de perfil
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function NavigationRail() {
  const drawerWidth = 80; // Ajustado para 80px
  const spacing = 2; 
  const spacing2 = 8; 
  const spacing3 = 4; 

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleIconClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centraliza os ícones horizontalmente
          paddingTop: spacing, // Espaço acima da imagem
          backgroundColor: '#CC3737', // Cor de fundo adicionada
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Imagem redonda pequena no topo */}
      <ListItem sx={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 0, marginBottom: spacing2, paddingTop: spacing }}>
        <img
          src="/SpaceSchool.png" // Substitua pelo caminho da sua imagem
          alt="Profile"
          style={{
            width: '40px', // Largura da imagem
            height: '40px', // Altura da imagem
            borderRadius: '50%', // Bordas arredondadas para fazer a imagem redonda
            objectFit: 'cover', // Ajusta a imagem para cobrir o elemento
          }}
        />
      </ListItem>

      {/* Lista de ícones */}
      <List sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: 0,
        flexGrow: 1, // Faz com que a lista ocupe o espaço disponível
      }}>
        <ListItem button key="agenda" sx={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 0 }}>
          {/* Botão do evento */}
          <IconButton
            sx={{
              width: '56px', // Largura do botão
              height: '56px', // Altura do botão
              borderRadius: '10px', // Bordas arredondadas
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFDAD7', // Cor de fundo opcional
              '&:hover': {
                backgroundColor: '#FFDAD8', // Cor de fundo ao passar o mouse
              },
            }}
          >
            <EventIcon sx={{ color: '#2D0002' }} />
          </IconButton>
        </ListItem>

        {[<HomeIcon sx={{ color: '#2D0002' }}/>,
          <FavoriteIcon sx={{ color: '#2D0002' }}/>,
          <SearchIcon sx={{ color: '#2D0002' }}/>].map((icon, index) => (
          <ListItem 
            button 
            key={index} 
            sx={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              flexDirection: 'column', // Alinha ícone e texto em coluna
              alignItems: 'center',
              padding: 0,
              marginTop: spacing3, // Adiciona margem entre os ícones
              position: 'relative', // Necessário para posicionar o círculo
            }}
            onClick={() => handleIconClick(index)}
          >
            <ListItemIcon 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                width: '100%',
                position: 'relative', // Necessário para posicionar o círculo
              }}
            >
              <IconButton
                sx={{
                  width: '56px', // Largura do botão
                  height: '30px', // Altura do botão
                  borderRadius: '20px', // Círculo ao redor do ícone
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: selectedIndex === index ? '#FFDAD7' : 'transparent', // Círculo ao redor do ícone quando selecionado
                  '&:hover': {
                    backgroundColor: selectedIndex === index ? 'rgba(255, 218, 215, 0.5)' : 'rgba(0, 0, 0, 0.1)', // Cor ao passar o mouse
                  },
                  position: 'relative', // Necessário para o círculo
                }}
              >
                {icon}
              </IconButton>
            </ListItemIcon>
            <Typography variant="caption" sx={{ color: '#FFFFFF', textAlign: 'center' }}>  {/* Adiciona o texto pequeno */}
              {['Inicio', 'Favoritos', 'Pesquisar'][index]} {/* Define o texto para cada ícone */}
            </Typography>
          </ListItem>
        ))}

        {/* Ícone de perfil na parte inferior */}
        <ListItem 
          sx={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: 'column', // Alinha ícone e texto em coluna
            alignItems: 'center',
            padding: 0, 
            marginTop: 'auto', 
            marginBottom: spacing3 
          }}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'relative' }}>
            <IconButton
              sx={{
                width: '56px', // Largura do botão
                height: '56px', // Altura do botão
                borderRadius: '50%', // Círculo ao redor do ícone
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent', // Sem cor de fundo para o ícone de perfil
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)', // Cor ao passar o mouse
                },
                position: 'relative', // Necessário para o círculo
              }}
            >
              <PersonIcon sx={{ color: '#2D0002' }} />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
}
