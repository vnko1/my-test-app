import { configureStore } from "@reduxjs/toolkit";
import { tweetsApi } from "./tweetsApi/tweetsApi";

export const store = configureStore({
  reducer: {
    [tweetsApi.reducerPath]: tweetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    tweetsApi.middleware,
  ],
});
