import {LOGOUT, SET_USER,ADDPHOTO} from "../actionTypes/actionTypes";

export const setUser = (payload) => (
    {type: SET_USER, payload}
    )

export const logout = () => (
    {type: LOGOUT}
    )

export const addPhotoAC = (payload)=>{
  return {
    type: ADDPHOTO,
    payload
  }
}
