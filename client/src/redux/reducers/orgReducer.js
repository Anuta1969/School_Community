import { ADD_ORGANIZATION, INIT_ORGANIZATIONS } from "../actionTypes/actionTypes"


export default function orgReducer(state = [], action) {
  switch (action.type) {
      case INIT_ORGANIZATIONS:
          return action.payload

      case ADD_ORGANIZATION:
          return  action.payload

      default:
          return state
  }

  
}

