"use client"; // Certifique-se de que este componente seja um Client Component

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br"; // Ajuste correto para importar o idioma


const CalendarComponent = () => {
  // Defina os eventos manualmente
  const [events] = useState([

    {
      id: 2,
      title: "Reservado - Alexandre",
      start: "2024-09-03T10:30:00",
      end: "2024-09-03T12:30:00",
    },
    {
      id: 3,
      title: "Reservado - Victor",
      start: "2024-09-03T12:30:00",
    },
    {
      id: 4,
      title: "Reservado - João Paulo",
      start: "2024-09-04T07:00:00",
    },
  ]);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridDay" // Visualização inicial
      events={events} // Passando os eventos manualmente
      locale={ptBrLocale}
      // editable={true} 
      // // Permite arrastar e soltar
      selectable={true} 
      // Permite selecionar intervalos de tempo
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
    />
  );
};

export default CalendarComponent;
