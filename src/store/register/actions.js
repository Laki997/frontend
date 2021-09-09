import {REGISTER_USER, REGISTER_SUCCESS, REGISTER_FAILURE} from './actionTypes'


export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user
})

export const registerUserAction = (credentials) => ({
    type: REGISTER_USER,
    payload: credentials
})

export const registerFailuer = (error) => ({
    type: REGISTER_FAILURE,
    payload: error
})