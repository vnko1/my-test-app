import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    refreshAllUsers(state, action) {
      return (state = action.payload);
    },

    refreshFiltredUsers(state, action) {
      console.log(state);
      console.log(action);
      return (state = action.payload);
    },
  },
});

export const { refreshAllUsers, refreshFiltredUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
