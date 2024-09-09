import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';


const CalendarComponent = () => {
const CalendarWrapper = styled.div`

width: 456px;
height: 310px;
border-top: 2px solid #ccc;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);


  .react-calendar {
    width: 600px;
    border: none;
  }

  .react-calendar__tile {
    max-width: 600px;
    padding: 10px;
    text-align: center;
    background: none;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  .react-calendar__tile--active {
    background-color: #007bff;
    color: white;
  }
`;
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (


    <CalendarWrapper>
      <Calendar onChange={onChange} value={date} />
    </CalendarWrapper>
  );
};

export default CalendarComponent;