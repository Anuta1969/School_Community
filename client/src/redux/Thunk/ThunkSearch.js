import axios from "axios";
import { initAllStudentsAC } from "../actionCreators/actionCreatorStudent";

export const thunkInitStudents =()=>{
  return(dispatch)=>{
    axios.get(`${process.env.REACT_APP_URL}/student/inits`)
    .then(({data:{list}})=>dispatch(initAllStudentsAC(list)))
    .catch(err => console.log(err))
  }
}
