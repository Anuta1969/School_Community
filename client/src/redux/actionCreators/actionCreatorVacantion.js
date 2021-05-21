import { ADD_VACANTION ,INIT_VACANTION,INIT_ONE_VACANTION,EDIT_ACTUAL_VACANTION} from "../actionTypes/actionTypes"

export const addVacantionAC = (payload) => ({
  type:ADD_VACANTION,
  payload
})

export const initVacantionAC = (payload) => ({
  type:INIT_VACANTION,
  payload
})

export const initOneCardAC = (payload) => ({
  type:INIT_ONE_VACANTION,
  payload
})

export const editActualVacantionAC = (payload) => ({
  type:EDIT_ACTUAL_VACANTION,
  payload
})
