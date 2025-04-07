import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FilterType, toggleStop } from "../../store/filterSlice";
import "./transfer-filter.scss";

const stops: { label: string; value: keyof FilterType }[] = [
  { label: "Все", value: "all" },
  { label: "Без пересадок", value: "0" },
  { label: "1 пересадка", value: "1" },
  { label: "2 пересадки", value: "2" },
  { label: "3 пересадки", value: "3" },
];

const TransferFilter: React.FC = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.filter.selected);

  const handleToggle = (value: keyof typeof selected) => {
    dispatch(toggleStop(value));
  };

  return (
    <div className="transfer-filter">
      <h2 className="transfer-filter__title">Количество пересадок</h2>

      {stops.map(({ label, value }) => {
        return (
          <label key={value} className="transfer-filter__option">
            <input
              type="checkbox"
              checked={selected[value]}
              onChange={() => handleToggle(value)}
            />
            <span className="transfer-filter__checkmark"></span>
            {label}
          </label>
        );
      })}
    </div>
  );
};

export default TransferFilter;
