import {combineReducers} from "redux";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";


const rootReducer = combineReducers({
  student:userReducer,
  admin:adminReducer
})

export default rootReducer
