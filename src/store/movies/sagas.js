import movieService from "../../services/movieService";
import { CREATE_MOVIE, GET_MOVIE, GET_MOVIES } from "./actionTypes";
import { takeLatest, put } from "@redux-saga/core/effects";
import { push } from "connected-react-router";
import { getMovieActionSuccess, getMoviesActionSuccess } from "./actions";
import { ROUTES } from "../../constants";

export function* addMovie({
  payload: { title, description, coverImage, genre },
}) {
  try {
    yield movieService.createMovie({
      title,
      cover_image: coverImage,
      description,
      genre,
    });
    yield put(push(ROUTES.MOVIE_LIST));
  } catch (error) {
    console.log(error);
  }
}

export function* getMovies() {
  try {
    const data = yield movieService.getMovies();
    yield put(getMoviesActionSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* getMovie(id) {
  try {
    const data = yield movieService.getMovie(id);
    yield put(getMovieActionSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* movieSaga() {
  yield takeLatest(CREATE_MOVIE, addMovie);
  yield takeLatest(GET_MOVIES, getMovies);
  yield takeLatest(GET_MOVIE, getMovie);
}
