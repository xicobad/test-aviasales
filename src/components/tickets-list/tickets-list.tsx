import React from "react";
import TicketCard from "../ticket-card/ticket-card";
import "./tickets-list.scss";

const TicketsList: React.FC = () => {
  return (
    <div className="tickets-list">
      <TicketCard />
      <TicketCard />
      <TicketCard />

      <button className="tickets-list__show-more">
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default TicketsList;
