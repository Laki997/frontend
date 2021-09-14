import { CREATE_MOVIE } from "./actionTypes";

export const createMovieAction = (movie) => ({
  type: CREATE_MOVIE,
  payload: movie,
});
