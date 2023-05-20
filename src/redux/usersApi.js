import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGELIMIT } from "../services";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://644fa705ba9f39c6ab68c233.mockapi.io/",
  }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    fetchUsers: build.query({
      query: ({ page = 1, query = "" }) =>
        `users?p=${page < 1 ? 1 : page}&l=${PAGELIMIT}&filter=${query}`,
      providesTags: (result) =>
        result
          ? [
              ...result.users.map(({ id }) => ({ type: "Users", id })),
              { type: "Users", id: "PARTIAL-LIST" },
            ]
          : [{ type: "Users", id: "PARTIAL-LIST" }],
      serializeQueryArgs: ({ endpointName }) => endpointName,

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Users", id },
        { type: "Users", id: "PARTIAL-LIST" },
      ],
    }),
  }),
});

export const { useFetchUsersQuery, useUpdateUserMutation } = usersApi;
