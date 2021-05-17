import {INIT_ALL_STUDENTS, INIT_SEARCH_STUDENTS,UPDATE_USER_From_ALL,ADD_PHOTO_USER_FROM_ALL,ADD_RESUME_USER_FROM_ALL} from "../actionTypes/actionTypes";

const defaultState = {
    filter: [],
    all: []
}

const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INIT_ALL_STUDENTS:
            return {...state, all: action.payload}

        case INIT_SEARCH_STUDENTS:
            return {...state, filter: action.payload}

        case UPDATE_USER_From_ALL:         
        return {...state,
           all:           
           state.all.map(el=>el._id !== action.payload._id ? el: action.payload)
          }
        case ADD_PHOTO_USER_FROM_ALL:
          // console.log(action.payload);
          return {...state,
            all:           
            state.all.map(el=>el._id !== action.payload._id ? el: action.payload)
           }
        case ADD_RESUME_USER_FROM_ALL:
         
          return {...state,
            all:           
            state.all.map(el=>el._id !== action.payload._id ? el : {
              ...el,
              resume:action.payload.resume
            })
           }


        default:
            return state
    }
}

export default searchReducer
