import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext);
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
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle.finishDate && (
                    <Status statusColor='green'>Done</Status>
                  )}

                  {cycle.stopDate && <Status statusColor='red'>Stopped</Status>}

                  {!cycle.finishDate && !cycle.stopDate && (
                    <Status statusColor='yellow'>In progress</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
