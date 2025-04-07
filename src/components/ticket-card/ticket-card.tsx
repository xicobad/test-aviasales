import React from "react";
import logo from "../../assets/S7-logo.svg";
import "./ticket-card.scss";

export interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export interface Ticket {
  price: number;
  carrier: string;
  segments: Segment[];
}

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-card__header">
        <div className="ticket-card__price">{ticket.price} Р</div>
        <img
          className="ticket-card__carrier-logo"
          src={logo}
          alt="Carrier Logo"
        />
      </div>

      {ticket.segments.map((seg, i) => {
        const startDate = new Date(seg.date);
        const endDate = new Date(
          startDate.getTime() + seg.duration * 60 * 1000
        );

        const startTime = startDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const endTime = endDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <div className="ticket-card__segment" key={i}>
            <div className="ticket-card__col">
              <div className="ticket-card__label">
                {seg.origin} - {seg.destination}
              </div>
              <div className="ticket-card__value">
                {startTime} - {endTime}
              </div>
            </div>

            <div className="ticket-card__col">
              <div className="ticket-card__label">В пути</div>
              <div className="ticket-card__value">
                {Math.floor(seg.duration / 60)}ч {seg.duration % 60}м
              </div>
            </div>

            <div className="ticket-card__col">
              <div className="ticket-card__label">
                {seg.stops.length} пересад
                {seg.stops.length === 1
                  ? "ка"
                  : seg.stops.length > 1
                    ? "ки"
                    : "ок"}
              </div>
              <div className="ticket-card__value">{seg.stops.join(", ")}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketCard;
