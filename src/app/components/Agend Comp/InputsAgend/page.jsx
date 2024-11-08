"use client"

import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, List, ListItem, ListItemText, Select, MenuItem } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DatePicker from 'react-datepicker'; // Importando react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Importando os estilos do calendário
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './page.module.css';

const Inputs = ({ names, setNames }) => { // Recebendo names e setNames como props
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);
  const [itinerary, setItinerary] = useState(''); // Novo estado para o campo Itinerário
  const itineraries = ['1 - Etim', 'Itinerário 2', 'Itinerário 3'];

  const [selectedDate, setSelectedDate] = useState(null); // Estado para a data do calendário

  const [startTime, setStartTime] = useState(null); // Estado para o horário de início
  const [endTime, setEndTime] = useState(null); // Estado para o horário de fim

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleAddName = () => {
    if (name.trim() && itinerary) {
      setNames((prevNames) => [...prevNames, { name: name.trim(), itinerary }]);
      setName(''); // Limpa o campo de input após adicionar o nome
      setItinerary(''); // Limpa o campo de itinerário selecionado
    }
  };
  

  return (

    <Box className={styles.formContainer}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    {/* Inputs de Nome e Itinerário alinhados lado a lado */}
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
        fullWidth
        className={`${styles.selectField} ${styles.inputItem}`} // Classe para customização
      >
        <MenuItem value="" disabled>
          Selecione um itinerário
        </MenuItem>
        {itineraries.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </Box>

    {/* Botão Adicionar */}
    <Button
      fullWidth
      variant="contained"
      color="primary"
      className={styles.addButton}
      onClick={handleAddName} // Ação para adicionar nome e itinerário
    >
      Adicionar
    </Button>


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
                  disableUnderline: true // Remover sublinhado padrão do TextField
                }}
                margin="dense"
              />
            )}
          />
          <p className={styles.pe2}>HH/MM</p>

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
                  disableUnderline: true // Remover sublinhado padrão do TextField
                }}
                margin="dense"
              />
            )}
          />
          <p className={styles.pe2}>HH/MM</p>

        <TextField 
          fullWidth
          label="Motivo"
          className={styles.textField}
        />

        {/* Botão para Finalizar o Agendamento */}
        <div className={styles.buttonContainer}>
        <Button variant="contained" color="primary" fullWidth onClick={handleOpen}>
          Finalizar Agendamento
        </Button>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              borderRadius: '8px',
              width:'100%',
              maxWidth: '500px',
              margin: 'auto',
            },
          }}
        >
        <DialogTitle sx={{ textAlign: 'center', backgroundColor: '#68c392', color: '#fff' }}>
          <CheckCircleIcon sx={{ fontSize: 40 }} />
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center', padding: '16px 24px' }}>
          <DialogContentText sx={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#4a9a5d', marginTop: '1rem', }}>
            Agendamento Finalizado
          </DialogContentText>
          <DialogContentText sx={{ fontSize: '0.9rem', color: '#666' }}>
            Sua reserva foi feita com sucesso!
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', padding: '16px' }}>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              backgroundColor: '#4a9a5d',
              marginTop:'-1rem',
              color: '#fff',
              borderRadius: '10px',
              padding: '8px 24px',
              width:'10rem',
              '&:hover': { backgroundColor: '#3e8b50' },
            }}
          >
            Ok
          </Button>
        </DialogActions>
        </Dialog>
        </div>


        {/* Lista de Nomes Adicionados */}
        <List className={styles.namesList}>
          {namesList.map((addedName, index) => (
            <ListItem key={index}>
              <ListItemText primary={addedName} />
            </ListItem>
          ))}
        </List>
    </LocalizationProvider>
      </Box>  

  );
};

export default Inputs;
