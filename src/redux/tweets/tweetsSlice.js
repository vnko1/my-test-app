import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    addTweetId(state, action) {
      return [...state, action.payload];
    },
    deleteTweetId(state, action) {
      return state.filter((tweet) => tweet !== action.payload);
    },
  },
});

export const { addTweetId, deleteTweetId } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
