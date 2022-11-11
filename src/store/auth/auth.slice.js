import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './auth.service';

const initialState = {
  token: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    });
  },
});

export const { logout } = authSlice.actions;

export const selectIsAuthenticated = state => {
  console.log(state);
  return state?.auth?.isAuthenticated;
};
