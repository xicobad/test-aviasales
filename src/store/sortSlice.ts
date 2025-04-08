import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortType = "cheap" | "fast" | "optimal" | "default";

export interface SortState {
  selected: SortType;
}

const initialState: SortState = {
  selected: "default",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<SortType>) {
      state.selected = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
