// import {SET_USER,LOGOUT} from "../actionTypes/actionTypes";

const defaultState = {
    vacantion: [],
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case 'INIT_VACANTION':
          
            return {
                ...state,
                vacantion: action.payload.vacantion,
                

            }
        case 'ADD_VACANTION':
            
          return { ...state, vacantion: [...state.vacantion, action.payload] };
        default:
            return state
    }
}
