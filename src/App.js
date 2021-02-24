import './App.scss';
import React, { useState } from 'react';
import Calendar from './components/calendar/Calendar';

function App() {
  const [date, setDate] = useState(new Date());

  function setNewDate(value) {
    setDate(value);
  }

  return <Calendar date={date} setNewDate={setNewDate} />;
}

export default App;
