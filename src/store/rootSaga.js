import { fork } from "@redux-saga/core/effects";
import { registerSaga } from "./register/sagas";
import { loginSaga } from "./login/sagas";
import { addMovieSaga } from "./movies/sagas";

export default function* rootSaga() {
  yield fork(loginSaga);
  yield fork(registerSaga);
  yield fork(addMovieSaga);
}
