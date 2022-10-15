import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@redux/store/userSlice";
import requestReducer from "@redux/store/requestSlice";
import transportReducer from "@redux/store/transportSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    request: requestReducer,
    transport: transportReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
