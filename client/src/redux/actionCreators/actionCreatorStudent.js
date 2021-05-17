import {UPDATE_USER, ADD_PHOTO, ADD_RESUME, INIT_ALL_STUDENTS, INIT_SEARCH_STUDENTS,
  UPDATE_USER_From_ALL,ADD_PHOTO_USER_FROM_ALL,ADD_RESUME_USER_FROM_ALL} from "../actionTypes/actionTypes";

export const addPhotoAC = (payload)=>({
    type: ADD_PHOTO,
    payload
})
export const addPhotoUserFromAllAC = (payload)=>({
  type: ADD_PHOTO_USER_FROM_ALL,
  payload
})
export const updateUserProfileAC = (payload)=>({
    type: UPDATE_USER,
    payload
})

export const updateUserFromAllState = (payload)=>({
  type: UPDATE_USER_From_ALL,
  payload
})
export const addResumeUserAC = (payload)=>({
    type: ADD_RESUME,
    payload
})
export const addResumeUserFromAllAC = (payload)=>({
  type: ADD_RESUME_USER_FROM_ALL,
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
