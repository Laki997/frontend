import authService from "../../services/authService";
import { LOGIN_USER } from "./actionTypes";
import { setToken, setRefreshToken } from "./actions";
import { takeLatest, put, call } from "@redux-saga/core/effects";
import { setItem } from "./utils";
import { push } from "connected-react-router";
import { ROUTES } from "../../constants";

export function* loginWithCredentials({ payload: { email, password } }) {
  try {
    const { access, refresh } = yield authService.login({
      password,
      email,
    });
    yield call(setItem, "token", access);
    yield put(setToken(access));
    yield call(setItem, "refresh_token", refresh);
    yield put(setRefreshToken(refresh));
    yield put(push(ROUTES.MOVIES));
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoginSaga() {
  yield takeLatest(LOGIN_USER, loginWithCredentials);
}
