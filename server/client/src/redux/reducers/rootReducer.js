import {combineReducers} from "redux";
import userReducer from "./userReducer";
import orgReducer from "./orgReducer";
import adminReducer from "./adminReducer";
import vacantionReducer from "./vacantionReducer";
import searchReducer from "./searchReducer";


const rootReducer = combineReducers({
    student: userReducer,
    organization: orgReducer,
    admin: adminReducer,
    vacantion: vacantionReducer,
    search: searchReducer
})

export default rootReducer
