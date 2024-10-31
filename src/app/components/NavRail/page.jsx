"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation"; 
import Drawer from "@mui/material/Drawer";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite"; 
import PersonIcon from "@mui/icons-material/Person";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ListItem from "@mui/material/ListItem";
import { IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import styles from './page.module.css';
import Image from 'next/image';
import { useState, useEffect } from "react";

export default function NavigationRail({ user }) {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleNavigation = (index, route) => {
    setSelectedIndex(index);
    router.push(route);
  };
  useEffect(() => {
    const path = pathname;
    switch (path) {
      case "/screens/HomeW":
        setSelectedIndex(0);
        break;
      case "/screens/Fav":
        setSelectedIndex(1);
        break;
      case "/screens/Pagina2":
        setSelectedIndex(2);
        break;
      case "/screens/Pagina3":
        setSelectedIndex(3);
        break;
      default:
        setSelectedIndex(null);
    }
  }, [pathname]);

  const handleIconClick = (index, route) => {
    setSelectedIndex(index);
    router.push(route); // Navega para a rota correspondente
  };

  const spacing = 2;
  const spacing2 = 8;
  const spacing3 = 4;

  return isMobile ? (
    <BottomNavigation
      value={selectedIndex}
      onChange={(event, newIndex) => handleNavigation(newIndex, ["/screens/HomeW", "/screens/Fav", "/screens/CalendarioPage", "/screens/Perfil"][newIndex])}
      sx={{ width: "100%", position: "fixed", bottom: 0, backgroundColor: "#CC3737", zIndex:"1", }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Agenda" icon={<EventIcon />} />
      <BottomNavigationAction label="Perfil" icon={             
         user.image ? (
                <Image
                src={user.image || '/img/default-avatar.png'}
                alt="Profile Avatar"
                width={30}
                height={30}
                className={styles.smallAvatar}
                />
              ) : (
                  <PersonIcon sx={{ color: "#2D0002" }} />
                )
                } />
    </BottomNavigation>
  ) : (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 80,
        "& .MuiDrawer-paper": { width: 80, boxSizing: "border-box", backgroundColor: "#CC3737" },
      }}
    >
      {/* LOGO */}
      <ListItem
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: 0,
          marginBottom: spacing2,
          paddingTop: spacing,
        }}
      >
        <IconButton
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
                position: "relative",
              }}
              onClick={() => handleIconClick(5, "/")}
              >

        <img
          src="/SpaceSchool.png"
          alt="Profile"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          />
          </IconButton>
      </ListItem>

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0,
          flexGrow: 1,
        }}
      >
        <ListItem
          button
          key="agenda"
          sx={{ width: "100%", display: "flex", justifyContent: "center", padding: 0 }}
        >
          {/* Botão do evento */}
          <IconButton
            sx={{
              width: "56px",
              height: "56px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFDAD7",
              "&:hover": {
                backgroundColor: "#FFDAD8",
              },
            }}
            onClick={() => handleIconClick(3, "/screens/CalendarioPage")} // Navega para a página 3
          >
            <EventIcon sx={{ color: "#2D0002" }} />
          </IconButton>
        </ListItem>

        {/* Lista de ícones */}
        {[
          { icon: <HomeIcon sx={{ color: "#2D0002" }} />, route: "/screens/HomeW" },
          { icon: <FavoriteIcon sx={{ color: "#2D0002" }} />, route: "/screens/Fav" },
        ].map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: 0,
              marginTop: spacing3,
              position: "relative",
            }}
            onClick={() => handleIconClick(index, item.route)}>
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                position: "relative",
              }}
            >
              <IconButton
                sx={{
                  width: "56px",
                  height: "30px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: selectedIndex === index ? "#FFDAD7" : "transparent",
                  "&:hover": {
                    backgroundColor: selectedIndex === index
                      ? "rgba(255, 218, 215, 0.5)"
                      : "rgba(0, 0, 0, 0.1)",
                  },
                  position: "relative",
                }}
              >
                {item.icon}
              </IconButton>
            </ListItemIcon>
            <Typography variant="caption" sx={{ color: "#FFFFFF", textAlign: "center" }}>
              {["Inicio", "Favoritos", "Pesquisar"][index]} {/* Define o texto para cada ícone */}
            </Typography>
          </ListItem>
        ))}

        {/* Ícone de perfil na parte inferior */}
        <ListItem
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: 0,
            marginTop: "auto",
            marginBottom: spacing3,
          }}
        >
          <ListItemIcon
            sx={{ display: "flex", justifyContent: "center", width: "100%", position: "relative" }}
          >
            <IconButton
              sx={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
                position: "relative",
              }}
              onClick={() => handleIconClick(4, "/screens/Perfil")}
              >
              {user.image ? (
                <Image
                src={user.image || '/img/default-avatar.png'}
                alt="Profile Avatar"
                width={50}
                height={50}
                className={styles.smallAvatar}
                />
              ) : (
                  <PersonIcon sx={{ color: "#2D0002" }} />
                )}
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
}

NavigationRail.defaultProps = {
  user: { name: 'Fulano da Silva', image: '/perfilVitu.jpg' },
};
