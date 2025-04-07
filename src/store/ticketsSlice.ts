import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Ticket {
  price: number;
  carrier: string;
  segments: Segments[];
}

interface Segments {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
}

interface TicketState {
  tickets: Ticket[];
  loading: boolean;
  error: boolean;
}

const initialState: TicketState = {
  tickets: [],
  loading: false,
  error: false,
};

export const fetchTickets = createAsyncThunk("tickets/fetch", async () => {
  const searchRes = await fetch(
    "https://aviasales-test-api.kata.academy/search"
  );
  const { searchId } = await searchRes.json();

  let allTickets: Ticket[] = [];
  let stop = false;

  while (!stop) {
    try {
      const res = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
      );
      const data = await res.json();
      allTickets = [...allTickets, ...data.tickets];
      stop = data.stop;
    } catch (error) {
      console.log("Retry fetch " + error);
    }
  }

  return allTickets;
});

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const ticketsReducer = ticketSlice.reducer;
