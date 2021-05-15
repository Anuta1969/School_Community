import { ADD_VACANTION ,INIT_VACANTION} from "../actionTypes/actionTypes";

export const addVacantionAC = (payload) => ({
  type:ADD_VACANTION,
  payload
})


export const initVacantionAC = (payload) => ({
  type:INIT_VACANTION,
  payload
})
