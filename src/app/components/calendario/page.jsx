"use client";

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br"; // Importa o idioma

import api from "../../../services/api"; // Certifique-se de que o caminho está correto

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [dados, setDados] = useState({
    id_rsvamb: '',
    data_rsvamb: '',
    hr_inicial_rsvamb: '',
    hr_final_rsvamb: '',
    // id_ambiente: '',
  });


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fazendo a requisição para a API
        const response = await api.get("/reserva_ambiente", { ...dados}); // Substitua pelo endpoint correto
        const data = response.data; // Acessa os dados da resposta

        // Formata os dados no formato esperado pelo FullCalendar
        const formattedEvents = data.map((dados) => ({
          id: dados.id_rsvamb,
          title: `Reservado - ${dados.motivo_amb}`,
          start: `${dados.data_rsvamb}T${dados.hr_inicial_rsvamb}`,
          end: `${dados.data_rsvamb}T${dados.hr_final_rsvamb}`,
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Erro ao buscar os eventos:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={{ width: "auto", height: "45vh", position: "relative" }}>
      {/* Contêiner pequeno */}
      <div className="calendario-pequeno">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek" // Visualização inicial
          events={events} // Passando os eventos do estado
          locale={ptBrLocale}
          editable={false}
          selectable={true}
          headerToolbar={{
            left: "prev,today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,next",
          }}
          height="100%" // Ajusta o calendário para ocupar 100% do contêiner
          contentHeight="auto" // Ajusta o conteúdo para a altura automática
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
