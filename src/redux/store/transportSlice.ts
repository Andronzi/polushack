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
  characteristics: string;
  name: string;
  car_number: string;
}

export type TransportState = {
  transports: Array<Transport>;
  currentCharacterestics: Array<string>;
  types: Array<string>;
  status: string;
};

export const transportSlice = createSlice({
  name: "transport",
  initialState: {
    transports: [],
    currentCharacterestics: [],
    types: [],
    status: "waiting",
  } as TransportState,
  reducers: {
    changeTransport(state: TransportState, action: any) {
      const transportWithCharacterestics = action.payload;
      const characteristics: Array<string> = [];
      transportWithCharacterestics.forEach((transport: Transport) => {
        if (!characteristics.includes(transport.characteristics)) {
          characteristics.push(transport.characteristics);
        }
      });
      state.currentCharacterestics = characteristics;
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
          const types = state.transports.map(transport => transport.type);
          types.forEach(type => {
            if (!state.types.includes(type)) {
              state.types.push(type);
            }
          });
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
