import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterType = {
  "0": boolean;
  "1": boolean;
  "2": boolean;
  "3": boolean;
  all: boolean;
};

export interface FilterState {
  selected: FilterType;
}

const initialState: FilterState = {
  selected: {
    "0": false,
    "1": false,
    "2": false,
    "3": false,
    all: false,
  },
};

export const filterSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterType>) {
      state.selected = action.payload;
    },
    toggleStop(state, action: PayloadAction<keyof FilterType>) {
      const stop = action.payload;

      if (stop === "all") {
        const newValue = !state.selected.all;
        Object.keys(state.selected).forEach((key) => {
          state.selected[key as keyof FilterType] = newValue;
        });
      } else {
        state.selected[stop] = !state.selected[stop];

        const rest = Object.fromEntries(
          Object.entries(state.selected).filter(([key]) => key !== "all")
        );

        const allChecked = Object.values(rest).every(Boolean);
        state.selected.all = allChecked;
      }
    },
  },
});

export const { setFilter, toggleStop } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
