import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { PAGELIMIT } from "../../services";

export const tweetsApi = createApi({
  reducerPath: "tweetsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://644fa705ba9f39c6ab68c233.mockapi.io/",
  }),
  tagTypes: ["Tweets"],
  endpoints: (build) => ({
    fetchTweets: build.query({
      query: () => `tweets`,
      // query: (page = 1) => `tweets?p=${page}&l=${PAGELIMIT}`,

      serializeQueryArgs: ({ endpointName }) => endpointName,
      providesTags: ["Tweets"],
      // merge: (currentCache, newItems) => {
      //   currentCache.tweets.push(...newItems.tweets);
      // },
      // forceRefetch({ currentArg, previousArg }) {
      //   return currentArg !== previousArg;
      // },
    }),

    updateTweet: build.mutation({
      query: ({ id, data }) => ({
        url: `tweets/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Tweets", id },
        { type: "Tweets", id: "PARTIAL-LIST" },
      ],
    }),
  }),
});

export const { useFetchTweetsQuery, useUpdateTweetMutation } = tweetsApi;
