import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tweetsApi } from "./tweetsApi/tweetsApi";
import { themeReducer } from "./themeReducer/themeSlice";

const themePersistConfig = {
  key: "theme",
  version: 1,
  whitelist: ["theme"],
  storage,
};

const themePersistReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    [tweetsApi.reducerPath]: tweetsApi.reducer,
    theme: themePersistReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    tweetsApi.middleware,
  ],
});

export const persistStor = persistStore(store);
