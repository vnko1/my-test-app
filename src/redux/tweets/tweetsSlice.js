import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    addTweetId(state, action) {
      // state.id.push(action.payload);
      return [...state.id, action.payload];
    },
    deleteTweetId(state, action) {
      return state.id.filter((el) => el !== action.payload);
    },
    // getTweets(state, action) {
    //   state.tweets = action.payload;
    // },
  },
});

export const { addTweetId, deleteTweetId } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
