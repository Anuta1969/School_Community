import {
    SET_USER,
    LOGOUT,
    UPDATE_USER,
    ADD_RESUME, ADD_PHOTO, INIT_ALL_STUDENTS
} from "../actionTypes/actionTypes";

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            action.payload.student.isAuth = true
            return action.payload.student

        case LOGOUT:
            localStorage.removeItem('token')
            return {student: action.payload}

        case ADD_PHOTO:
            return {...state, photo: action.payload}

        case UPDATE_USER:
            return action.payload

        case ADD_RESUME:
            return {...state, resume: action.payload}

        default:
            return state
    }
}



