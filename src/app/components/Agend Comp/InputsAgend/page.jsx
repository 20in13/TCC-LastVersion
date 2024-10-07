"use client";

import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DatePicker from 'react-datepicker'; // Importando react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Importando os estilos do calendário
import styles from './page.module.css';

const Inputs = ({ names, setNames }) => {
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null); // Estado para a data do calendário
  const [startTime, setStartTime] = useState(''); // Estado para o horário de início
  const [endTime, setEndTime] = useState(''); // Estado para o horário de fim

  const handleAddName = () => {
    if (name.trim()) {
      setNames((prevNames) => [...prevNames, name.trim()]); // Atualiza o estado names
      setName('');
    }
  };

  const handleTimeChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <Box className={styles.formContainer}>
      {/* Input para adicionar nomes com botão "+" */}
      <TextField
        fullWidth
        label="Nomes"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.textField}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleAddName} className={styles.iconButton}>
              <AddIcon />
            </IconButton>
          )
        }}
      />

      {/* Input para Data do Agendamento usando DatePicker */}
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        customInput={
          <TextField
            fullWidth
            label="Data do agendamento"
            className={styles.textField}
            InputProps={{
              endAdornment: (
                <IconButton className={styles.iconButton}>
                  <CalendarTodayIcon />
                </IconButton>
              )
            }}
          />
        }
      />
      <p className={styles.pe}>DD/MM/AAAA</p>

      {/* Input para Horário Início */}
      <TextField
        fullWidth
        label="Horário Início"
        type="time"
        value={startTime}
        onChange={handleTimeChange(setStartTime)}
        className={styles.textField}
        InputProps={{
          endAdornment: (
            <IconButton className={styles.iconButton}>
              <AccessTimeIcon />
            </IconButton>
          )
        }}
      />
      <p className={styles.pe}>HH/MM</p>

      {/* Input para Horário Fim */}
      <TextField
        fullWidth
        label="Horário Fim"
        type="time"
        value={endTime}
        onChange={handleTimeChange(setEndTime)}
        className={styles.textField}
        InputProps={{
          endAdornment: (
            <IconButton className={styles.iconButton}>
              <AccessTimeIcon />
            </IconButton>
          )
        }}
      />
      <p className={styles.pe}>HH/MM</p>

      {/* Botão para Finalizar o Agendamento */}
      <div className={styles.buttonContainer}>
        <Button variant="contained" color="primary" fullWidth>
          Finalizar Agendamento
        </Button>
      </div>

      {/* Lista de Nomes Adicionados */}
      <List className={styles.namesList}>
        {names.map((addedName, index) => ( // Usando 'names' do estado
          <ListItem key={index}>
            <ListItemText primary={addedName} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Inputs;
