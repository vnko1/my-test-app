import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tweetsApi = createApi({
  reducerPath: "tweetsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://644fa705ba9f39c6ab68c233.mockapi.io/",
  }),
  tagTypes: ["Tweets"],
  endpoints: (build) => ({
    fetchTweets: build.query({
      query: () => `tweets`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      providesTags: ["Tweets"],
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
