import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TicketCard from "../ticket-card/ticket-card";
import { FilterType } from "../../store/filterSlice";
import { Spin } from "antd";
import "./tickets-list.scss";

const TicketsList: React.FC = () => {
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const loading = useSelector((state: RootState) => state.tickets.loading);
  const error = useSelector((state: RootState) => state.tickets.error);
  const sortType = useSelector((state: RootState) => state.sort.selected);
  const selectedStops = useSelector(
    (state: RootState) => state.filter.selected
  );

  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  if (loading)
    return (
      <div className="tickets-list-loader">
        <Spin size="large"></Spin>
      </div>
    );
  if (error) return <p>Ошибка при загрузки билетов</p>;
  if (!tickets.length) return <p>Билеты не найдены</p>;

  const stopsWithoutAll = Object.entries(selectedStops).filter(
    ([key]) => key !== "all"
  );

  const hasAtLeastOneFilterEnabled = stopsWithoutAll.some(
    ([, isChecked]) => isChecked
  );

  const filteredTickets = hasAtLeastOneFilterEnabled
    ? tickets.filter((ticket) => {
        const stopsPerSegment = ticket.segments.map(
          (segment) => segment.stops.length
        );

        const maxStops = Math.max(...stopsPerSegment).toString();

        return selectedStops[maxStops as keyof FilterType];
      })
    : tickets;

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    if (sortType === "cheap") {
      return a.price - b.price;
    }

    if (sortType === "fast") {
      const aDur = a.segments[0].duration + a.segments[1].duration;
      const bDur = b.segments[0].duration + b.segments[1].duration;

      return aDur - bDur;
    }

    if (sortType === "optimal") {
      const weight = 0.7;
      const aScore =
        a.price + (a.segments[0].duration + a.segments[1].duration) * weight;
      const bScore =
        b.price + (b.segments[0].duration + b.segments[1].duration) * weight;

      return aScore - bScore;
    }

    return 0;
  });

  return (
    <div className="tickets-list">
      {sortedTickets.slice(0, visibleCount).map((ticket, i) => {
        return <TicketCard key={i} ticket={ticket} />;
      })}

      {visibleCount < sortedTickets.length && (
        <button className="tickets-list__show-more" onClick={handleShowMore}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  );
};

export default TicketsList;
