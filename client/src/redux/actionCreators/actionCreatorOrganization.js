import { ADD_COMMENT, ADD_ORGANIZATION, INIT_ONE_OGRANIZATION, INIT_ORGANIZATIONS, INIT_ORG_VACANCY } from "../actionTypes/actionTypes";

export const addOrganizationAC = (payload) => ({
  type: ADD_ORGANIZATION,
  payload
})

export const initOrganizationsAC = (payload) => ({
  type: INIT_ORGANIZATIONS,
  payload
})

export const initOneOrganizationsAC = (payload) => ({
  type: INIT_ONE_OGRANIZATION,
  payload
})

export const addCommentAC = (payload) => ({
  type: ADD_COMMENT,
  payload
})
export const addOrgVacantionAC = (payload) => ({
  type: INIT_ORG_VACANCY,
  payload
})
