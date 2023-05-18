import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://644fa705ba9f39c6ab68c233.mockapi.io/",
  }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    fetchUsers: build.query({
      query: (page = 1) => `users?p=${page}&l=6`,
      providesTags: ["Users"],
    }),
    fetchAllUsers: build.query({
      query: () => `users`,
      providesTags: ["Users"],
    }),
    fetchFiltredUsers: build.query({
      query: (filterValue) => `users?filter=${filterValue}`,
      providesTags: ["Users"],
    }),
    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useFetchUsersQuery,
  useFetchAllUsersQuery,
  useFetchFiltredUsersQuery,
  useUpdateUserMutation,
} = usersApi;
