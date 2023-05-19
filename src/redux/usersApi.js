import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://644fa705ba9f39c6ab68c233.mockapi.io/",
  }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    fetchUsers: build.query({
      query: ({ page = 1, query = "" }) =>
        `users?p=${page}&l=6&filter=${query}`,
      providesTags: ["Users"],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
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

// export const usersApi = createApi({
//   reducerPath: "usersApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://644fa705ba9f39c6ab68c233.mockapi.io/",
//   }),
//   tagTypes: ["Users"],
//   endpoints: (build) => ({
//     fetchUsers: build.query({
//       query: ({ page = 1, query = "" }) => {
//         console.log(query);
//         return `users?p=${page}&l=6&filter=${query}`;
//       },
//       providesTags: ["Users"],
//       serializeQueryArgs: ({ endpointName }) => {
//         return endpointName;
//       },
//       // merge: (currentCache, newItems) => {
//       //   currentCache.push(...newItems);
//       // },
//       forceRefetch({ currentArg, previousArg }) {
//         return currentArg !== previousArg;
//       },
//     }),
//     fetchAllUsers: build.query({
//       query: () => `users`,
//       providesTags: ["Users"],
//     }),
//     fetchFiltredUsers: build.query({
//       query: (filterValue) => `users?filter=${filterValue}`,
//       providesTags: ["Users"],
//     }),
//     updateUser: build.mutation({
//       query: ({ id, data }) => ({
//         url: `users/${id}`,
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: (result, error, id) => [
//         { type: "Users", id },
//         { type: "Users", id: "PARTIAL-LIST" },
//       ],
//       // invalidatesTags: ["Users"],
//     }),
//   }),
// });
