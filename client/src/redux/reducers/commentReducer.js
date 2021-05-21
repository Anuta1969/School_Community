import { INIT_COMMENT } from "../actionTypes/actionTypes"

const commentReducer = (payload) => {
  switch (action.type) {
      case INIT_COMMENT:
         return payload

      default:
          return state
  }
}

export default commentReducer
