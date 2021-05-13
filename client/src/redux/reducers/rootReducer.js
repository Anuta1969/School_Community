import {combineReducers} from "redux";
import userReducer from "./userReducer";
import orgReducer from "./orgReducer";


const rootReducer = combineReducers({
  student:userReducer,
  organization: orgReducer,
})

export default rootReducer
