import authService from '../../services/authService'
// import { registerUserAction } from './actions'
import { REGISTER_USER } from '../config/actionTypes'
import { takeLatest,all,call } from '@redux-saga/core/effects';


export function* registerWithCredentials({payload:{firstName, lastName, email, password}}){
    yield authService.register(firstName, lastName, email, password);
}

export function* onRegisterStart(){
    yield takeLatest(REGISTER_USER, registerWithCredentials);
}

export function* registerSagas(){
    yield all([call(onRegisterStart)])
}
    