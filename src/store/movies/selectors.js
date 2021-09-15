import { createSelector } from "reselect";

const selectMovie = (state) => state.movieReducer;

export const selectMovies = () =>
  createSelector(selectMovie, (substate) => substate.movies);

export const selectOneMovie = () =>
  createSelector(selectMovie, (substate) => substate.movie);
