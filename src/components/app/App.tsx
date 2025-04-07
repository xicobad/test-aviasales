import React from "react";
import TicketsPage from "../tickets-page/tickets-page";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <TicketsPage />
    </Provider>
  );
};

export default App;
