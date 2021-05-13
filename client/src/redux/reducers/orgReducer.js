import { INIT_ORGANIZATIONS } from "../actionTypes/actionTypes"

const defaultState = {
  organization: [],
}

export default function orgReducer(state = defaultState, action) {
  switch (action.type) {
      case INIT_ORGANIZATIONS:
          return {
              ...state,
              organization: action.payload,
          }
 
      default:
          return state
  }
}

