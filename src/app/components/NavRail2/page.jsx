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

export default function NavigationRail() {
  const drawerWidth = 80; // Ajustado para 80px

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
          justifyContent: 'center', // Centraliza os ícones verticalmente
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
        <ListItem button key="agenda" sx={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 0 }}>
          <IconButton
            sx={{
              width: '56px', // Largura do botão
              height: '56px', // Altura do botão
              borderRadius: '8px', // Bordas arredondadas
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0', // Cor de fundo opcional
              '&:hover': {
                backgroundColor: '#e0e0e0', // Cor de fundo ao passar o mouse
              },
            }}
          >
            <EventIcon />
          </IconButton>
        </ListItem>
        {[<HomeIcon />, <FavoriteIcon />, <SearchIcon />, <PersonIcon />].map((icon, index) => (
          <ListItem button key={index} sx={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 0 }}>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>{icon}</ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
