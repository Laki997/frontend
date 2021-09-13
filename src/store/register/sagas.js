import authService from "../../services/authService";
import { REGISTER_USER } from "./actionTypes";
import { takeLatest } from "@redux-saga/core/effects";

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
  } catch (error) {
    console.log(error.data);
  }
}

export function* watchRegisterSaga() {
  yield takeLatest(REGISTER_USER, registerWithCredentials);
}
