import {ADDPHOTO} from "../actionTypes/actionTypes";

export const addPhotoAC = (payload)=>{
  return {
    type: ADDPHOTO,
    payload
  }
}
