import movieService from "../../services/movieService";
import {
  CREATE_COMMENT,
  CREATE_MOVIE,
  CREATE_MOVIE_REACTION,
  GET_COMMENTS_ACTION,
  GET_MOVIE,
  GET_MOVIES,
  CREATE_WATCHLIST_ACTION,
} from "./actionTypes";
import { takeLatest, put } from "@redux-saga/core/effects";
import { push } from "connected-react-router";
import {
  setCommentsAction,
  setCurrentWatchListFlag,
  setMoviesAction,
  setNextCommentPage,
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

export function* addComment({ payload: { movie, content } }) {
  try {
    yield movieService.createComment({ movie, content });
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
    yield put(setCurrentWatchListFlag(data.isWatched[0].watched));
  } catch (error) {
    console.log(error);
  }
}

export function* createMovieReaction({ payload }) {
  try {
    const data = yield movieService.creteMovieReaction(payload);
    yield put(setSingleMovieAction(data));
  } catch (error) {
    console.log(error);
  }
}

export function* createWatchListAction({ payload }) {
  console.log(payload);
  try {
    const data = yield movieService.createWatchList(payload);
    yield put(setCurrentWatchListFlag(data?.isWatched[0]?.watched));
    yield put(setSingleMovieAction(data));
  } catch (error) {
    console.log(error);
  }
}

export function* getComments({ payload, currentCommentPage }) {
  try {
    const data = yield movieService.getComments(payload, currentCommentPage);
    yield put(setCommentsAction(data.results));
    yield put(setNextCommentPage(data.next));
  } catch (error) {
    console.log(error);
  }
}

export function* movieSaga() {
  yield takeLatest(CREATE_MOVIE, addMovie);
  yield takeLatest(GET_MOVIES, getMovies);
  yield takeLatest(GET_MOVIE, getMovie);
  yield takeLatest(CREATE_MOVIE_REACTION, createMovieReaction);
  yield takeLatest(CREATE_COMMENT, addComment);
  yield takeLatest(GET_COMMENTS_ACTION, getComments);
  yield takeLatest(CREATE_WATCHLIST_ACTION, createWatchListAction);
}
