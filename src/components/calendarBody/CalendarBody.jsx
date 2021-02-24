function CalendarBody(props) {
  const days = [];
  const daysInMonth = new Date(
    props.date.getFullYear(),
    props.date.getMonth() + 1,
    0
  ).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  function renderCell() {
    return (
      <table>
        {props.teams.teams.map((team) => {
          return (
            <>
              <tr>
                <td className='calendar-table__body-row'></td>
              </tr>

              {team.members.map((userName, i) => {
                i++;
                if (i == team.members.length) {
                  return (
                    <>
                      <tr>
                        <td className='calendar-table__body-row'></td>
                      </tr>
                      <tr>
                        <td className='separator'></td>
                      </tr>
                    </>
                  );
                } else {
                  return (
                    <tr>
                      <td className='calendar-table__body-row'></td>
                    </tr>
                  );
                }
              })}
            </>
          );
        })}
      </table>
    );
  }

  return (
    <>
      {days.map((day, j) => {
        return (
          <>
            {j % 7 === 5 || j % 7 === 6 ? (
              <td className='calendar-table__body-column weekend'>
                {renderCell()}
              </td>
            ) : (
              <td className='calendar-table__body-column'>{renderCell()}</td>
            )}
          </>
        );
      })}
    </>
  );
}

export default CalendarBody;
