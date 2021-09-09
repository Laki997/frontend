import authService from '../../services/authService'
import { REGISTER_USER } from './actionTypes'
import { takeLatest,all,call, put } from '@redux-saga/core/effects';
import { registerFailuer} from './actions';


export function* registerWithCredentials({payload:{firstName, lastName, password,email}}){
    try {
        yield authService.register({first_name: firstName, last_name:lastName, password,email})
        // yield put (registerSuccess({first_name:firstName, last_name:lastName, password, email}))
    } catch (error){
        console.log(error)
        yield put (registerFailuer(error))
    }
}

export function* onRegisterStart(){
    yield takeLatest(REGISTER_USER, registerWithCredentials);
}

// export function* onRegisterSuccess(){
//     yield takeLatest(REGISTER_SUCCESS,)
// }

export function* registerSagas(){
    yield all([call(onRegisterStart)])
}
    