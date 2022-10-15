import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData: string) => {
    const url = `https://6307551fc0d0f2b8012cb7ad.mockapi.io/api/todo/users`;
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

export interface UserState {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {} as UserState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state: UserState, action: any) => ({
      ...state,
      ...action.payload,
    }));
  },
});

export default userSlice.reducer;
