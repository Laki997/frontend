import { createSelector } from "reselect";
import { create } from "yup/lib/Reference";

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

export const selectSearchParam = () =>
  createSelector(selectMovie, (substate) => substate.searchParam);

export const selectFilterParam = () =>
  createSelector(selectMovie, (substate) => substate.filterParam);

export const selectComments = () =>
  createSelector(selectMovie, (substate) => substate.comments);

export const selectCurrentCommentPage = () =>
  createSelector(selectMovie, (substate) => substate.currentCommentPage);

export const selectNextCommentPage = () =>
  createSelector(selectMovie, (substate) => substate.nextCommentPage);

export const selectCurrentWatchListFlag = () =>
  createSelector(selectMovie, (substate) => substate.currentWatchListFlag);

export const selectPopularMovies = () =>
  createSelector(selectMovie, (substate) => substate.popularMovies);

export const selectRelatedMovies = () =>
  createSelector(selectMovie, (substate) => substate.relatedMovies);

// export const selectCurrentWatchListFlag = () =>
//   createSelector(selectMovie, (substate) => substate.movie.gledao[0].watched);
