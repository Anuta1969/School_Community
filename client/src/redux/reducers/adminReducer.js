import {INIT_REQUEST_STUDENT_PARAMS, INIT_REQUEST_STUDENTS} from "../actionTypes/actionTypes";

const adminReducer = (state = [], action) => {
    switch (action.type) {
        case INIT_REQUEST_STUDENTS:
            return action.payload

        case INIT_REQUEST_STUDENT_PARAMS:
            return action.payload

        default:
            return state
    }
}

export default adminReducer
