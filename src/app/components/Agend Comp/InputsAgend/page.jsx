"use client"

import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, List, ListItem, ListItemText, responsiveFontSizes } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from './page.module.css';

const Inputs = () => {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);

  const handleAddName = () => {
    if (name.trim()) {
      setNamesList((prevNames) => [...prevNames, name.trim()]);
      setName(''); // Limpa o campo de input após adicionar o nome
    }
  };

  return (
    <Box className={styles.formContainer}>
      {/* Input para adicionar nomes com botão "+" */}
      {/* <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}> */}
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
        
      {/* </Box> */}

      {/* Input para Data do Agendamento */}
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
      <p className={styles.pe}>DD/MM/AAAA</p>

      {/* Input para Horário Início */}
      <TextField
        fullWidth
        label="Horário Início"
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
        {namesList.map((addedName, index) => (
          <ListItem key={index}>
            <ListItemText primary={addedName} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Inputs;
