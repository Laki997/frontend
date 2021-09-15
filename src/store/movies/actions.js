import {
  CREATE_MOVIE,
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
  SET_CURRENT_PAGE,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  SET_SEARCH_PARAM,
} from "./actionTypes";

export const createMovieAction = (movie) => ({
  type: CREATE_MOVIE,
  payload: movie,
});

export const getMoviesAction = (currentPage, searchParam) => ({
  type: GET_MOVIES,
  currentPage,
  searchParam,
});

export const setMoviesAction = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  movies,
});

export const getSingleMovie = (id) => ({
  type: GET_MOVIE,
  id,
});

export const setSingleMovieAction = (movie) => ({
  type: GET_MOVIE_SUCCESS,
  movie,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setNextPage = (nextPage) => ({
  type: SET_NEXT_PAGE,
  nextPage,
});

export const setPreviousPage = (previousPage) => ({
  type: SET_PREVIOUS_PAGE,
  previousPage,
});

export const setSearchParam = (searchParam) => ({
  type: SET_SEARCH_PARAM,
  searchParam,
});
