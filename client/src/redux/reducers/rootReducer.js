import {combineReducers} from "redux";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
  student:userReducer,
})

export default rootReducer
