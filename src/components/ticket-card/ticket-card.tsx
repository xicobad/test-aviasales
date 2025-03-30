import React from "react";
import logo from "../../assets/S7-logo.svg";
import "./ticket-card.scss";

const TicketCard: React.FC = () => {
  return (
    <div className="ticket-card">
      <div className="ticket-card__header">
        <div className="ticket-card__price">13 400 Р</div>
        <img
          className="ticket-card__carrier-logo"
          src={logo}
          alt="Carrier Logo"
        />
      </div>

      <div className="ticket-card__segment">
        <div className="ticket-card__col">
          <div className="ticket-card__label">MOW – HKT</div>
          <div className="ticket-card__value">10:45 – 08:00</div>
        </div>
        <div className="ticket-card__col">
          <div className="ticket-card__label">В пути</div>
          <div className="ticket-card__value">15ч 15м</div>
        </div>
        <div className="ticket-card__col">
          <div className="ticket-card__label">2 пересадки</div>
          <div className="ticket-card__value">AUH, IST</div>
        </div>
      </div>

      <div className="ticket-card__segment">
        <div className="ticket-card__col">
          <div className="ticket-card__label">HKT – MOW</div>
          <div className="ticket-card__value">11:20 – 07:05</div>
        </div>
        <div className="ticket-card__col">
          <div className="ticket-card__label">В пути</div>
          <div className="ticket-card__value">14ч 45м</div>
        </div>
        <div className="ticket-card__col">
          <div className="ticket-card__label">1 пересадка</div>
          <div className="ticket-card__value">DXB</div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
