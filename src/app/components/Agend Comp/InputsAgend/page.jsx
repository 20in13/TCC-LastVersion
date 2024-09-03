import React from 'react';
import { Box, TextField, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from './page.module.css';

const Inputs = () => {
  return (
    <Box className={styles.formContainer}>
      <TextField fullWidth label="Nome" className={styles.textField} />
      <TextField fullWidth label="Data do agendamento" className={styles.textField}
        InputProps={{
          endAdornment: (
            <IconButton>
              <CalendarTodayIcon />
            </IconButton>
          )
        }}
      />
      <TextField fullWidth label="Horário Início" className={styles.textField}
        InputProps={{
          endAdornment: (
            <IconButton>
              <AccessTimeIcon />
            </IconButton>
          )
        }}
      />
      <TextField fullWidth label="Horário Fim" className={styles.textField}
        InputProps={{
          endAdornment: (
            <IconButton>
              <AccessTimeIcon />
            </IconButton>
          )
        }}
      />
      <Button variant="contained" color="primary" fullWidth>
        Finalizar Agendamento
      </Button>
    </Box>
  );
};

export default Inputs;
