import {
  CREATE_MOVIE,
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
} from "./actionTypes";

export const createMovieAction = (movie) => ({
  type: CREATE_MOVIE,
  payload: movie,
});

export const getMoviesAction = () => ({
  type: GET_MOVIES,
});

export const getMoviesActionSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  movies,
});

export const getMovieAction = (id) => ({
  type: GET_MOVIE,
  id,
});

export const getMovieActionSuccess = (movie) => ({
  type: GET_MOVIE_SUCCESS,
  movie,
});
