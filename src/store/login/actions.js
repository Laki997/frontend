import { LOGIN_USER, REFRESH_TOKEN, TOKEN } from "./actionTypes";

export const loginUserAction = (credentials) => ({
  type: LOGIN_USER,
  payload: credentials,
});

export const setToken = (token) => ({
  type: TOKEN,
  payload: token,
});

export const setRefreshToken = (token) => ({
  type: REFRESH_TOKEN,
  payload: token,
});
