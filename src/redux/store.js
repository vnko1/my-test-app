import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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
import { tweetsReducer } from "./tweets/tweetsSlice";

const tweetsPersistConfig = {
  key: "id",
  version: 1,
  whitelist: ["id"],
  storage,
};

const rootReducer = combineReducers({ tweets: tweetsReducer });

const tweetsPersistedReducer = persistReducer(tweetsPersistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    [tweetsApi.reducerPath]: tweetsApi.reducer,
    tweets: tweetsPersistedReducer,
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
