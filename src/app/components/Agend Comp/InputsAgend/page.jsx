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
  const [reason, setReason] = useState(''); // Estado para o motivo
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddName = () => {
    if (!name || !itinerary) {
      alert("Por favor, preencha o nome e itinerário antes de adicionar.");
      return;
    }
  
    // Usa a função `addName` para atualizar o estado global
    addName({ name: name.trim(), itinerary });
  
    // Limpa os campos
    setName('');
    setItinerary('');
  };
  

  // const response = await api.post('/usuario/login', {
  //   email_usu: username, // Campo esperado pela API
  //   senha_usu: password, // Campo esperado pela API
  // });

  const handleFinalizeAppointment = async () => {
    if ( !selectedDate || !startTime || !endTime || !reason) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Estruture os dados para enviar à API
    const appointmentData = {
      nome: name.trim(),
      itinerario: itinerary,
      data: selectedDate, // Envie no formato ISO se a API espera isso
      horario_inicio: startTime.format('HH:mm'), // Formato de hora
      horario_fim: endTime.format('HH:mm'), // Formato de hora
      motivo: reason.trim(),
    };

    try {
      // Envie os dados para a API usando axios
      const response = await api.post('/reserva_ambiente', { ...dados, data_cad_usu: getCurrentDate() })

      if (response.data.sucesso) {
        setOpen(true); // Exibe o modal de sucesso
        // Você pode adicionar lógica para limpar os campos após o sucesso
        setName('');
        setItinerary('');
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
        <Box className={styles.inputsRow}>
          <TextField
            fullWidth
            label="Nome e Sobrenome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.textField} ${styles.inputItem}`}
          />
          <Select
            value={itinerary}
            onChange={(e) => setItinerary(e.target.value)}
            displayEmpty
            className={`${styles.textField} ${styles.inputItem}`}
          >
            <MenuItem value="" disabled>
              Selecione um itinerário
            </MenuItem>
            {[
            '1º - Etim', '2º - Etim', '3º - Etim', 
            '1º - Linguagens', '2º - Linguagens', '3º - Linguagens', 
            '1º - Exatas', '2º - Exatas', '3º - Exatas',
            '1º - Biológicas','2º - Biológicas','3º - Biológicas',
            '1º - NovoTec','2º - NovoTec','3º - NovoTec',
          ].map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={styles.addButton}
          onClick={handleAddName} // Ação para adicionar nome e itinerário
        >
          Adicionar
        </Button>

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
        <p className={styles.pe}>DD/MM/AAAA</p>

        <MobileTimePicker
          label="Horário Início"
          value={startTime}
          onChange={(newValue) => setStartTime(newValue)}
          ampm={false}
          renderInput={(params) => <TextField {...params} fullWidth margin="dense" />}
        />
        <p className={styles.pe2}>HH/MM</p>

        <MobileTimePicker
          label="Horário Fim"
          value={endTime}
          onChange={(newValue) => setEndTime(newValue)}
          ampm={false}
          renderInput={(params) => <TextField {...params} fullWidth margin="dense" />}
        />
        <p className={styles.pe2}>HH/MM</p>

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
