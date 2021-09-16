import movieService from "../../services/movieService";
import {
  CREATE_MOVIE,
  CREATE_MOVIE_REACTION,
  GET_MOVIE,
  GET_MOVIES,
} from "./actionTypes";
import { takeLatest, put } from "@redux-saga/core/effects";
import { push } from "connected-react-router";
import {
  setMoviesAction,
  setNextPage,
  setPreviousPage,
  setSingleMovieAction,
} from "./actions";
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

export function* getMovies(currentPage, searchParam, filterParam) {
  try {
    const data = yield movieService.getMovies(
      currentPage,
      searchParam,
      filterParam
    );
    yield put(setMoviesAction(data.results));
    yield put(setNextPage(data.next));
    yield put(setPreviousPage(data.previous));
  } catch (error) {
    console.log(error);
  }
}

export function* getMovie(id) {
  try {
    const data = yield movieService.getMovie(id);
    yield put(setSingleMovieAction(data));
  } catch (error) {
    console.log(error);
  }
}

export function* createMovieReaction({ payload }) {
  console.log(payload);
  try {
    const data = yield movieService.creteMovieReaction(payload);
  } catch (error) {
    console.log("cao");
  }
}

export function* movieSaga() {
  yield takeLatest(CREATE_MOVIE, addMovie);
  yield takeLatest(GET_MOVIES, getMovies);
  yield takeLatest(GET_MOVIE, getMovie);
  yield takeLatest(CREATE_MOVIE_REACTION, createMovieReaction);
}
