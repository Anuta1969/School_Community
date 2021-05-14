import {combineReducers} from "redux";
import userReducer from "./userReducer";
import orgReducer from "./orgReducer";
import adminReducer from "./adminReducer";


const rootReducer = combineReducers({
  student:userReducer,
  organization: orgReducer,
  admin:adminReducer
})

export default rootReducer
