import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Select, MenuItem } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios'; // Importe o axios para fazer a requisição
import styles from './page.module.css';

import api from '../../../../services/api';

const Inputs = ({ names, addName }) => {
  const [name, setName] = useState('');
  const [itinerary, setItinerary] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [reason, setReason] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFinalizeAppointment = async () => {
    if (!selectedDate || !startTime || !endTime || !reason) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const appointmentData = {
      data_rsvamb: selectedDate.toISOString().split('T')[0],
      hr_inicial_rsvamb: startTime.format('HH:mm'),
      hr_final_rsvamb: endTime.format('HH:mm'),
      motivo: reason.trim(),
    };

    try {
      const response = await api.post('/reserva_ambiente', appointmentData);
      if (response.data.sucesso) {
        setOpen(true);
        setSelectedDate(null);
        setStartTime(null);
        setEndTime(null);
        setReason('');
      } else {
        alert("Ocorreu um erro ao tentar agendar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados para a API:", error);
      alert("Erro ao se conectar com o servidor. Verifique sua conexão.");
    }
  };

  return (
    <Box className={styles.formContainer}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                ),
              }}
            />
          }
        />
        <MobileTimePicker
          label="Horário Início"
          value={startTime}
          onChange={(newValue) => setStartTime(newValue)}
          ampm={false}
          renderInput={(params) => <TextField {...params} fullWidth margin="dense" />}
        />
        <MobileTimePicker
          label="Horário Fim"
          value={endTime}
          onChange={(newValue) => setEndTime(newValue)}
          ampm={false}
          renderInput={(params) => <TextField {...params} fullWidth margin="dense" />}
        />
        <TextField
          fullWidth
          label="Motivo"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className={styles.textField}
        />
        <div className={styles.buttonContainer}>
          <Button variant="contained" color="primary" fullWidth onClick={handleFinalizeAppointment}>
            Finalizar Agendamento
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              <CheckCircleIcon />
              Agendamento Finalizado
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Sua reserva foi feita com sucesso!</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
        </div>
      </LocalizationProvider>
    </Box>
  );
};

export default Inputs;
