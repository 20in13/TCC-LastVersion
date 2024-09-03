// components/CalendarComponent.js
"use client";

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Carregar eventos do banco de dados ou API
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Erro ao carregar eventos:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      events={events}
      editable={true}
      selectable={true}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "timeGridWeek,timeGridDay",
      }}
      eventClick={(info) => alert(`Evento: ${info.event.title}`)}
    />
  );
};

export default CalendarComponent;
