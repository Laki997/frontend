import { REGISTER_USER } from "./actionTypes";

export const registerUserAction = (credentials) => ({
  type: REGISTER_USER,
  payload: credentials,
});
