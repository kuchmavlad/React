export default function CalendarUsers(props) {
  return (
    <td>
      <table>
        {props.teams.teams.map((team) => {
          return (
            <>
              <tr>
                <td className='calendar-table__body-row'>{team.name}</td>
              </tr>
              {team.members.map((userName, i) => {
                i++;
                if (i == team.members.length) {
                  return (
                    <>
                      <tr>
                        <td className='calendar-table__body-row'>
                          {userName.name}
                        </td>
                      </tr>
                      <tr>
                        <td className='separator'></td>
                      </tr>
                    </>
                  );
                } else {
                  return (
                    <tr>
                      <td className='calendar-table__body-row'>
                        {userName.name}
                      </td>
                    </tr>
                  );
                }
              })}
            </>
          );
        })}
      </table>
    </td>
  );
}
