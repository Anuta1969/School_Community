import {SET_USER,LOGOUT,ADDPHOTO} from "../actionTypes/actionTypes";

const defaultState = {
    currentStudent: {},
    // isAuth: false,
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            // console.log(action.payload)
            return {
                ...state,
                currentStudent: action.payload.student,
                isAuth: true,
                

            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentStudent: {},
                // isAuth: false,

            }

        case ADDPHOTO:
          return{
            ...state,
            currentStudent:{
              ...state.currentStudent,
              photo:action.payload
            }
          }




        default:
            return state
    }
}



