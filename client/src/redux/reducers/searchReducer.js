import {INIT_ALL_STUDENTS} from "../actionTypes/actionTypes";


const searchReducer = (state = [],action)=>{
    switch (action.type){
        case INIT_ALL_STUDENTS:
            return action.payload

        default:
            return state
    }
}

export default searchReducer
