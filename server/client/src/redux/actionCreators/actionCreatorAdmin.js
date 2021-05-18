import {INIT_REQUEST_STUDENT_PARAMS, INIT_REQUEST_STUDENTS} from "../actionTypes/actionTypes";

export const initRequestStudentsAC =(payload)=>({
    type:INIT_REQUEST_STUDENTS,
    payload
})

export const initRequestStudentParamsAC = (payload)=>({
    type:INIT_REQUEST_STUDENT_PARAMS,
    payload
})
