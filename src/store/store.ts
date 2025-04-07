import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { sortReducer } from "./sortSlice";
import { filterReducer } from "./filterSlice";
import { ticketsReducer } from "./ticketsSlice";

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    filter: filterReducer,
    tickets: ticketsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
