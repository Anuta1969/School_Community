import {UPDATE_USER, ADD_PHOTO, ADD_RESUME} from "../actionTypes/actionTypes";

export const addPhotoAC = (payload)=>{
  return {
    type: ADD_PHOTO,
    payload
  }
}
export const updateUserProfileAC = (payload)=>{
  return {
    type: UPDATE_USER,
    payload
  }
}


export const addResumeUserAC = (payload)=>{
  return {
    type: ADD_RESUME,
    payload
  }
}
