import {combineReducers} from "redux";
import userReducer from "./userReducer";
import orgReducer from "./orgReducer";
import adminReducer from "./adminReducer";
import vacantionReducer from "./vacantionReducer";


const rootReducer = combineReducers({
  student:userReducer,
  organization: orgReducer,
  admin:adminReducer,
  vacantion: vacantionReducer,
})

export default rootReducer
