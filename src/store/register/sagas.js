import authService from "../../services/authService";
import { REGISTER_USER } from "./actionTypes";
import { put, takeLatest } from "@redux-saga/core/effects";
import { push } from "connected-react-router";
import { ROUTES } from "../../constants";

export function* registerWithCredentials({
  payload: { firstName, lastName, password, email },
}) {
  try {
    yield authService.register({
      first_name: firstName,
      last_name: lastName,
      password,
      email,
    });
    yield put(push(ROUTES.LOGIN));
  } catch (error) {
    console.log(error.data);
  }
}

export function* registerSaga() {
  yield takeLatest(REGISTER_USER, registerWithCredentials);
}
