import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import host from "@redux/host";

export const getAllTransport = createAsyncThunk(
  "transport/getAllTransport",
  async () => {
    const url = `${host}/transport`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    const result = await response.json();
    return result;
  },
);

interface Transport {
  type: string;
  characteristic: string;
  name: string;
  car_number: string;
}

export type TransportState = {
  transports: Array<Transport>;
  currentTransports: Array<Transport>;
  status: string;
};

export const transportSlice = createSlice({
  name: "transport",
  initialState: {
    transports: [],
    currentTransports: [],
    status: "waiting",
  } as TransportState,
  reducers: {
    changeTransport(state: TransportState, action: any) {
      state.currentTransports = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllTransport.pending, (state: TransportState) => {
        state.status = "pending";
      })
      .addCase(
        getAllTransport.fulfilled,
        (state: TransportState, action: any) => {
          state.transports = action.payload;
          state.currentTransports = action.payload;
          state.status = "fulfilled";
        },
      )
      .addCase(getAllTransport.rejected, (state: TransportState) => {
        state.status = "rejected";
      });
  },
});

export const { changeTransport } = transportSlice.actions;
export default transportSlice.reducer;
