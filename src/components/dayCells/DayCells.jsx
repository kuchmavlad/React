import React, { useState } from 'react';

function DaySell(props) {
  const daysInMonth = new Date(
    props.date.getFullYear(),
    props.date.getMonth() + 1,
    0
  ).getDate();
  let firstDayInMonth = new Date(
    props.date.getFullYear(),
    props.date.getMonth(),
    1
  ).getDay();

  const calendar = [];

  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push({
      number: i,
      weekday: new Date(
        props.date.getFullYear(),
        props.date.getMonth(),
        i
      ).toLocaleDateString('en-US', { weekday: 'short' }),
    });
  }

  

  function ListItem(props) {
    return (
      <th className= {props.className}>
        <div className='calendar-table__head-week-day'>{props.weekday}</div>
        <div className='calendar-table__month-day'>{props.number}</div>
      </th>
    );
  }

  return (
    <>
      {calendar.map((calendar, i) => {
        i++
        if(i % 7 === 6 || i % 7 === 0) {
          return (
            <ListItem
            className = 'calendar-table__head-column weekday'
              number={calendar.number}
              weekday={calendar.weekday}
              key={calendar.number}
            />
          );
        } else {
          return (
            <ListItem
            className = 'calendar-table__head-column'
              number={calendar.number}
              weekday={calendar.weekday}
              key={calendar.number}
            />
          );
        }
      })}
    </>
  );
}

export default DaySell;
