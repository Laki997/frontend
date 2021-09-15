import { createSelector } from "reselect";

const selectMovie = (state) => state.movieReducer;

export const selectMovies = () =>
  createSelector(selectMovie, (substate) => substate.movies);

export const selectOneMovie = () =>
  createSelector(selectMovie, (substate) => substate.movie);

export const selectCurrentPage = () =>
  createSelector(selectMovie, (substate) => substate.currentPage);

export const selectNextPage = () =>
  createSelector(selectMovie, (substate) => substate.nextPage);

export const selectPreviousPage = () =>
  createSelector(selectMovie, (substate) => substate.previousPage);
