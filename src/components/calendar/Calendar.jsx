import DaySell from '../dayCells/DayCells';
import Switcher from '../monthSwitcher/MonthSwitcher';
import React, { useEffect } from 'react';
import renderTeams from '../renderTeams/renderTeams';
import CalendarUsers from '../calendarUsers/CalendarUsers';
import CalendarBody from '../calendarBody/CalendarBody';

function Calendar(props) {
  const teams = renderTeams();

  return (
    <>
      <Switcher date={props.date} setNewDate={props.setNewDate} />
      <table className='calendar-table'>
        <tr>
          <th className='btn'>btn</th>
          <DaySell date={props.date} />
        </tr>
        <tr>
          <CalendarUsers teams={teams} />
          <CalendarBody date={props.date} teams={teams} />
        </tr>
      </table>
    </>
  );
}

export default Calendar;
