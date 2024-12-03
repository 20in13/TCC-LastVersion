"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CalendarComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Removido o tipo TypeScript
  const [selectedLocation, setSelectedLocation] = useState("LAB 1");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setAnchorEl(null);
  };
  const [events] = useState([

    {
      id: 2,
      title: "Reservado - Alexandre",
      start: "2024-12-05T10:30:00",
      end: "2024-12-05T12:30:00",
    },
    {
      id: 3,
      title: "Reservado - Victor",
      start: "2024-12-02T13:00:00",
      end: "2024-12-02T15:00:00",
    },
    {
      id: 4,
      title: "Reservado - João Paulo",
      start: "2024-12-03T07:00:00",
      end: "2024-12-03T08:30:00",
    },
  ]);
  return (
    <div>
      {/* Cabeçalho */}
      <AppBar position="static" sx={{ backgroundColor: "#CC3737", height: "38px" }}>
        <Toolbar>
          <Typography variant="h7" sx={{ flexGrow: 1, textAlign: "center" }}>
            {selectedLocation}
            <IconButton
              color="inherit"
              onClick={handleMenuOpen}
              size="small"
              sx={{ ml: 0 }}
            >
              <ArrowDropDownIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Menu Suspenso */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {["Quadra", "LAB 1", "LAB 2", "LAB 3", "LAB 4", "Sala 7 (Temática)", "Laboratório de Pranchetas", "Audiovisual", "Biblioteca"].map(
          (location, index) => (
            <MenuItem key={index} onClick={() => handleLocationSelect(location)}>
              {location}
            </MenuItem>
          )
        )}
      </Menu>

      {/* Calendário */}
      <div style={{ width: "auto", height: "85vh", position: "relative" }}>
        <div className="calendario-pequeno">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            events={events}
            locale={ptBrLocale}
            editable={false}
            selectable={true}
            headerToolbar={{
              left: "prev,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,next",
            }}
            height="100%"
            contentHeight="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
