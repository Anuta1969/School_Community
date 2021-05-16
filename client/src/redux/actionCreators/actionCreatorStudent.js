import {UPDATE_USER, ADD_PHOTO, ADD_RESUME, INIT_ALL_STUDENTS, INIT_SEARCH_STUDENTS} from "../actionTypes/actionTypes";

export const addPhotoAC = (payload)=>({
    type: ADD_PHOTO,
    payload
})
export const updateUserProfileAC = (payload)=>({
    type: UPDATE_USER,
    payload
})


export const addResumeUserAC = (payload)=>({
    type: ADD_RESUME,
    payload
})

export const initAllStudentsAC = (payload)=>({
  type: INIT_ALL_STUDENTS,
  payload
})

export const searchRequestStudentsAC = (payload) =>({
    type:INIT_SEARCH_STUDENTS,
    payload
})
