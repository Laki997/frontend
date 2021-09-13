import { createSelector } from "reselect";

const selectLogin = (state) => state.loginReducer;

export const selectToken = () =>
  createSelector(selectLogin, (substate) => substate.token);
