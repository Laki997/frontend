import { fork } from "@redux-saga/core/effects";
import { watchRegisterSaga } from "./register/sagas";
import { watchLoginSaga } from "./login/sagas";

export default function* rootSaga() {
  yield fork(watchLoginSaga);
  yield fork(watchRegisterSaga);
}
