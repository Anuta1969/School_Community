import { ADD_ORGANIZATION, INIT_ORGANIZATIONS } from "../actionTypes/actionTypes";

export const addOrganizationAC = (payload) => ({
  type: ADD_ORGANIZATION,
  payload
})

export const initOrganizationsAC = (payload) => ({
  type: INIT_ORGANIZATIONS,
  payload
})

