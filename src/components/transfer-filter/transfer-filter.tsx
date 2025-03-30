import React from "react";
import "./transfer-filter.scss";

const TransferFilter: React.FC = () => {
  return (
    <div className="transfer-filter">
      <h2 className="transfer-filter__title">Количество пересадок</h2>

      <label className="transfer-filter__option">
        <input type="checkbox" />
        <span className="transfer-filter__checkmark"></span>
        Все
      </label>

      <label className="transfer-filter__option">
        <input type="checkbox" />
        <span className="transfer-filter__checkmark"></span>
        Без пересадок
      </label>

      <label className="transfer-filter__option">
        <input type="checkbox" />
        <span className="transfer-filter__checkmark"></span>1 пересадка
      </label>

      <label className="transfer-filter__option">
        <input type="checkbox" />
        <span className="transfer-filter__checkmark"></span>2 пересадки
      </label>

      <label className="transfer-filter__option">
        <input type="checkbox" />
        <span className="transfer-filter__checkmark"></span>3 пересадки
      </label>
    </div>
  );
};

export default TransferFilter;
