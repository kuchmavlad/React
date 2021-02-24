import React, { useState } from 'react';

export default function Switcher(props) {
  const [date, setDate] = useState(props.date);

  function prevMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    props.setNewDate(new Date(date.getFullYear(), date.getMonth() - 1));
  }

  function nextMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    props.setNewDate(new Date(date.getFullYear(), date.getMonth() + 1));
  }

  return (
    <div className='calendar-bar'>
      <button
        onClick={prevMonth}
        class='calendar-bar__control-button calendar-bar__control-button--prev'
      ></button>
      <div className='calendar-bar__header'>
        {date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </div>
      <button
        onClick={nextMonth}
        class='calendar-bar__control-button calendar-bar__control-button--next'
      ></button>
    </div>
  );
}
