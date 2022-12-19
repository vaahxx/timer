import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Init</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Task Name</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='yellow'>In progress</Status>
              </td>
            </tr>
            <tr>
              <td>Task Name</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='yellow'>In progress</Status>
              </td>
            </tr>
            <tr>
              <td>Task Name</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='red'>Interrupted</Status>
              </td>
            </tr>
            <tr>
              <td>Task Name</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='green'>Done</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
