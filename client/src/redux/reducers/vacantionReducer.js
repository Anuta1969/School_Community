import {ADD_VACANTION, INIT_VACANTION, INIT_ONE_VACANTION} from "../actionTypes/actionTypes";

const vacantionReducer = (state = [], action) => {
    switch (action.type) {
        case INIT_VACANTION:
            return action.payload

        case ADD_VACANTION:
            return [...state, action.payload]

        case INIT_ONE_VACANTION:
            return action.payload

        default:
            return state
    }
}

export default vacantionReducer
