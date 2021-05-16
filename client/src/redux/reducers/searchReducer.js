import {INIT_ALL_STUDENTS, INIT_SEARCH_STUDENTS} from "../actionTypes/actionTypes";

const defaultState = {
    filter:[],
    all:[]
}


const searchReducer = (state = defaultState,action)=>{
    switch (action.type){
        case INIT_ALL_STUDENTS:
        return {...state,all:action.payload}

        case INIT_SEARCH_STUDENTS:
            console.log(action.payload)
         return {...state,filter:action.payload}


        default:
            return state
    }
}

export default searchReducer
