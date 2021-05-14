import { ADD_VACANTION, INIT_VACANTION } from "../actionTypes/actionTypes";

 const vacantionReducer = (state = [], action) => {
    switch (action.type) {
        case INIT_VACANTION:
            return  action.payload.vacantion
            
        case ADD_VACANTION:
          return action.payload

        default:
            return state
    }
}

export default vacantionReducer
