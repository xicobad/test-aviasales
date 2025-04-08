import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setSort } from "../../store/sortSlice";
import type { SortType } from "../../store/sortSlice";
import "./sort-bar.scss";

const SortBar: React.FC = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.sort.selected);

  const handleSort = (value: SortType) => {
    dispatch(setSort(value));
  };

  return (
    <div className="sort-bar">
      <button
        className={`sort-bar__button ${selected === "cheap" ? "sort-bar__button--active" : ""}`}
        onClick={() => handleSort("cheap")}
      >
        Самый дешевый
      </button>
      <button
        className={`sort-bar__button ${selected === "fast" ? "sort-bar__button--active" : ""}`}
        onClick={() => handleSort("fast")}
      >
        Самый быстрый
      </button>
      <button
        className={`sort-bar__button ${selected === "optimal" ? "sort-bar__button--active" : ""}`}
        onClick={() => handleSort("optimal")}
      >
        Оптимальный
      </button>
      <button
        className={`sort-bar__button ${selected === "default" ? "sort-bar__button--active" : ""}`}
        onClick={() => handleSort("default")}
      >
        Без фильтров
      </button>
    </div>
  );
};

export default SortBar;
