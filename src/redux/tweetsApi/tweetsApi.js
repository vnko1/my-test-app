import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGELIMIT } from "../../services";

export const tweetsApi = createApi({
  reducerPath: "tweets",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://644fa705ba9f39c6ab68c233.mockapi.io/",
  }),
  tagTypes: ["Tweets"],
  endpoints: (build) => ({
    fetchTweets: build.query({
      query: ({ page = 1, queryType = "" }) =>
        `tweets?p=${page < 1 ? 1 : page}&l=${PAGELIMIT}${queryType.mode}`,

      providesTags: (result) =>
        result
          ? [
              ...result.tweets.map(({ id }) => ({ type: "Tweets", id })),
              { type: "Tweets", id: "PARTIAL-LIST" },
            ]
          : [{ type: "Tweets", id: "PARTIAL-LIST" }],

      serializeQueryArgs: ({ endpointName }) => endpointName,

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
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
