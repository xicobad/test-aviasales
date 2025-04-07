import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TicketCard from "../ticket-card/ticket-card";
import "./tickets-list.scss";


const TicketsList: React.FC = () => {
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const loading = useSelector((state: RootState) => state.tickets.loading);
  const error = useSelector((state: RootState) => state.tickets.error);

  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  if (loading) return <p>Загрузка билетов</p>;
  if (error) return <p>Ошибка при загрузки билетов</p>;
  if (!tickets.length) return <p>Билеты не найдены</p>;

  return (
    <div className="tickets-list">
      {tickets.slice(0, visibleCount).map((ticket, i) => {
        return <TicketCard key={i} ticket={ticket} />;
      })}

      <button className="tickets-list__show-more" onClick={handleShowMore}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default TicketsList;
