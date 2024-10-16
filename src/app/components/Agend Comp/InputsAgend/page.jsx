"use client";

import React, { useState } from 'react';
import { Box, TextField, Button, IconButton } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styles from './page.module.css';

const Inputs = () => {
  const [startTime, setStartTime] = useState(null); // Estado para o horário de início
  const [endTime, setEndTime] = useState(null); // Estado para o horário de fim

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className={styles.formContainer}>
        
        {/* TimePicker para Horário Início */}
        <MobileTimePicker
          label="Horário Início"
          value={startTime}
          onChange={(newValue) => setStartTime(newValue)}
          ampm={false} // 24 horas
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              className={`${styles.textField} ${styles.customTimePicker}`} // Classe customizada
              InputProps={{
                endAdornment: (
                  <IconButton className={styles.iconButton}>
                    <AccessTimeIcon />
                  </IconButton>
                ),
                disableUnderline: true // Remover sublinhado padrão do TextField
              }}
              margin="dense"
            />
          )}
        />
        <p className={styles.pe}>HH/MM</p>

        {/* TimePicker para Horário Fim */}
        <MobileTimePicker
          label="Horário Fim"
          value={endTime}
          onChange={(newValue) => setEndTime(newValue)}
          ampm={false} // 24 horas
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              className={`${styles.textField} ${styles.customTimePicker}`} // Classe customizada
              InputProps={{
                endAdornment: (
                  <IconButton className={styles.iconButton}>
                    <AccessTimeIcon />
                  </IconButton>
                ),
                disableUnderline: true // Remover sublinhado padrão do TextField
              }}
              margin="dense"
            />
          )}
        />
        <p className={styles.pe}>HH/MM</p>

        {/* Botão para Finalizar o Agendamento */}
        <div className={styles.buttonContainer}>
          <Button variant="contained" color="primary" fullWidth>
            Finalizar Agendamento
          </Button>
        </div>
      </Box>
    </LocalizationProvider>
  );
};

export default Inputs;
