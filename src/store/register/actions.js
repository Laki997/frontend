import {REGISTER_USER} from '../config/actionTypes'

export const registerUserAction = (credentials) => ({
    type: REGISTER_USER,
    payload: credentials
})