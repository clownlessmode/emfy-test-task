import React from "react";
import Deal from "../deal.interface";
import Spinner from "../../../Spinner";

interface DealCardProps {
  deal: Deal | null;
  loading: boolean;
}

const DealCard: React.FC<DealCardProps> = ({ deal, loading }) => {
  if (!deal) return <div className="table_wrapper">Выберите сделку</div>;

  const formatDate = (timestamp: number): string =>
    new Date((timestamp - 86400) * 1000).toLocaleDateString("ru-RU");

  const getTaskStatusColor = (timestamp?: number): string => {
    if (!timestamp) return "white";

    const now = new Date();
    const taskDate = new Date((timestamp - 86400) * 1000);
    const today = new Date(now.setHours(0, 0, 0, 0));
    const taskDay = new Date(taskDate.setHours(0, 0, 0, 0));

    if (taskDay < today) return "red";
    if (taskDay.getTime() === today.getTime()) return "green";
    return "yellow";
  };

  const statusColor = getTaskStatusColor(deal.closest_task_at);

  return (
    <div className="table_wrapper">
      <div className="table_header">
        <h1>Детали сделки</h1>
        <p>Просматривайте детальную информацию о сделке</p>
      </div>

      {loading ? (
        <div className="spinner_wrapper">
          <Spinner />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Номер</th>
              <th>Название</th>
              <th>Дата создания</th>
              <th>Ближайшая задача</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{deal.id}</td>
              <td>{deal.name}</td>
              <td>{formatDate(deal.created_at + 86400)}</td>
              <td>
                {deal.closest_task_at
                  ? formatDate(deal.closest_task_at)
                  : "Нет задач"}
              </td>
              <td>
                <svg width="20" height="20">
                  <circle cx="10" cy="10" r="10" fill={statusColor} />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DealCard;
