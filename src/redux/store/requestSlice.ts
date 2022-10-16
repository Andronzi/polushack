import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import host from "@redux/host";

export const getRequests = createAsyncThunk(
  "requests/getRequests",
  async () => {
    const url = `${host}/request`;
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

export const getRequestsAsStatus = createAsyncThunk(
  "requests/getRequestsAsStatus",
  async (status: string) => {
    const url = `${host}/request?status=${status}`;
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

export const createRequest = createAsyncThunk(
  "requests/createRequest",
  async (requestData: string) => {
    const url = `${host}/request`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: requestData,
    });

    const result = await response.json();
    return result;
  },
);

export interface Request {
  id: number;
  request_id: number;
  worker_id: number;
  transport_type: string;
  transport_property: string;
  transport_name: string;
  transport_number: string;
  open_date: Date;
  close_date: Date;
  request_status: string;
}

export interface RequestState {
  requests: Array<Request>;
  status: string;
}

export const requestSlice = createSlice({
  name: "request",
  initialState: { requests: [], status: "default" } as RequestState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getRequests.pending, (state: RequestState) => {
        state.status = "pending";
      })
      .addCase(getRequests.fulfilled, (state: RequestState, action: any) => {
        state.status = "fulfilled";
        state.requests = action.payload;
      })
      .addCase(getRequests.rejected, (state: RequestState) => {
        state.status = "rejected";
      })
      .addCase(getRequestsAsStatus.pending, (state: RequestState) => {
        state.status = "pending";
      })
      .addCase(getRequestsAsStatus.fulfilled, (state: RequestState) => {
        state.status = "fulfilled";
      })
      .addCase(getRequestsAsStatus.rejected, (state: RequestState) => {
        state.status = "default";
      })
      .addCase(createRequest.pending, (state: RequestState) => {
        state.status = "pending";
      })
      .addCase(createRequest.fulfilled, (state: RequestState, action: any) => {
        state.status = "fulfilled";
        state.requests.push(action.payload);
      })
      .addCase(createRequest.rejected, (state: RequestState, action: any) => {
        state.status = "rejected";
      });
  },
});

export default requestSlice.reducer;
