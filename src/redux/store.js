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
import { usersApi } from "./usersApi/usersApi";
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
    [usersApi.reducerPath]: usersApi.reducer,
    theme: themePersistReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    usersApi.middleware,
  ],
});

export const persistStor = persistStore(store);
