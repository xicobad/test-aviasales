import React from "react";
import Header from "../header/header";
import TransferFilter from "../transfer-filter/transfer-filter";
import SortBar from "../sort-bar/sort-bar";
import TicketsList from "../tickets-list/tickets-list";
import "./tickets-page.scss";

const TicketsPage: React.FC = () => {
  return (
    <div className="tickets-page">
      <Header />

      <div className="tickets-page__content">
        <aside className="tickets-page__sidebar">
          <TransferFilter />
        </aside>

        <main className="tickets-page__main">
          <SortBar />
          <TicketsList />
        </main>
      </div>
    </div>
  );
};

export default TicketsPage;
