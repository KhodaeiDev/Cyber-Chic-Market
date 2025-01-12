import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
 name: "user",
 initialState: {
  user: null,
 },
 reducers: {
  setUser: (state, action) => {
   state.user = action.payload;
  },
  clearUser: (state) => {
   state.user = null;
  },
 },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer