import {ADD_ORGANIZATION, INIT_ONE_OGRANIZATION, INIT_ORGANIZATIONS, INIT_ORG_VACANCY} from "../actionTypes/actionTypes"

export default function orgReducer(state = [], action) {
    switch (action.type) {
        case INIT_ORGANIZATIONS:
            return action.payload

        case ADD_ORGANIZATION:
            return [...state, action.payload]

        case INIT_ONE_OGRANIZATION:
            return action.payload

        // case INIT_ORG_VACANCY:
        //   return action.payload

        default:
            return state
    }
}

