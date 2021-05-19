import axios from 'axios';
import { initAllStudentsAC } from '../actionCreators/actionCreatorStudent';

export const thunkInitStudents = () => {
  return (dispatch) => {
    axios
      .get(`/student/inits`)
      .then(({ data: { list } }) => dispatch(initAllStudentsAC(list)))
      .catch((err) => console.log(err));
  };
};
