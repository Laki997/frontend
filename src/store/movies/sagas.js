import movieService from "../../services/movieService";
import { CREATE_MOVIE } from "./actionTypes";
import { takeLatest, put } from "@redux-saga/core/effects";
import { push } from "connected-react-router";
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

export function* addMovieSaga() {
  yield takeLatest(CREATE_MOVIE, addMovie);
}
