import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import host from "@redux/host";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData: string) => {
    const url = `${host}/users`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: userData,
    });

    const result = await response.json();
    return result;
  },
);

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export type UserState = {
  user: User;
  status: string;
};

export const userSlice = createSlice({
  name: "user",
  initialState: { user: {}, status: "waiting" } as UserState,
  reducers: {
    setDefaultStatus(state) {
      state.status = "waiting";
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createUser.pending, (state: UserState) => {
        state.status = "pending";
      })
      .addCase(createUser.fulfilled, (state: UserState, action: any) => {
        state.user = action.payload;
        state.status = "fulfilled";
      })
      .addCase(createUser.rejected, (state: UserState) => {
        state.status = "rejected";
      });
  },
});

export const { setDefaultStatus } = userSlice.actions;
export default userSlice.reducer;
