import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;