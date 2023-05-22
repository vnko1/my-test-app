import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: { tweets: [], id: [] },
  reducers: {
    addTweetId(state, action) {
      return [...state.id, action.payload];
    },
    deleteTweetId(state, action) {
      return state.id.filter((el) => el !== action.payload);
    },
    getTweets(state, action) {
      console.log(state.tweets);
      console.log(action.payload);
      state.tweets = action.payload;
    },
  },
});

export const { addTweetId, deleteTweetId, getTweets } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
