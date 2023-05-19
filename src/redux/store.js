import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { usersSlice } from "./usersSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    users: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
});
