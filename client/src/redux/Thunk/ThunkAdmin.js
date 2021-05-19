import axios from 'axios';
import {
  initRequestStudentParamsAC,
  initRequestStudentsAC,
} from '../actionCreators/actionCreatorAdmin';

export const thunkAdminList = () => {
  return (dispatch) => {
    axios
      .get(`/admin/request`)
      .then(({ data: { result } }) => dispatch(initRequestStudentsAC(result)))
      .catch((err) => console.log(err));
  };
};

export const thunkInitRequestStudent = (id) => {
  return (dispatch) => {
    axios
      .get(`/admin/student/${id}`)
      // .then(data => console.log(data))
      .then(({ data: { student } }) =>
        dispatch(initRequestStudentParamsAC([student]))
      )
      .catch((err) => console.log(err));
  };
};

export const thunkApplyStudentRequest = (id) => {
  return (dispatch) => {
    axios
      .post(`/admin/student/${id}`)
      .then((data) => dispatch(data))
      .catch((err) => console.log(err));
  };
};

export const thunkDelStudentRequest = (id) => {
  return (dispatch) => {
    axios
      .delete(`/admin/student/${id}`)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
};
