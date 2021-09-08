import { all, call } from "@redux-saga/core/effects";
import {registerSagas} from './register/sagas'


export default function* rootSaga(){
    yield all([call(registerSagas)])
}