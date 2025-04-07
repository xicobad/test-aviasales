import { configureStore } from "@reduxjs/toolkit";
import { sortReducer } from "./sortSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
