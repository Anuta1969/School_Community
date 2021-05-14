import {LOGOUT, SET_USER} from "../actionTypes/actionTypes";

export const setUser = (payload) => ({
    type: SET_USER,
    payload
})

export const logout = () => ({
    type: LOGOUT
})


