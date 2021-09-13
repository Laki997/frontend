import { createSelector } from "reselect";

const getToken = (state) => state.loginReducer.token;

export const token = () => createSelector(getToken, (substate) => substate);
