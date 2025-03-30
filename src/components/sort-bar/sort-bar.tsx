import React from "react";
import "./sort-bar.scss";

const SortBar: React.FC = () => {
  return (
    <div className="sort-bar">
      <button className="sort-bar__button sort-bar__button--active">
        Самый дешевый
      </button>
      <button className="sort-bar__button">Самый быстрый</button>
      <button className="sort-bar__button">Оптимальный</button>
    </div>
  );
};

export default SortBar;
