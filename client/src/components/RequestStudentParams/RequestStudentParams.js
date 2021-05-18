import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  thunkApplyStudentRequest,
  thunkDelStudentRequest,
  thunkInitRequestStudent,
} from '../../redux/Thunk/ThunkAdmin';

function RequestStudent(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const admin = useSelector((state) => state.admin).filter(
    (el) => el._id === id
  )[0];

  useEffect(() => {
    dispatch(thunkInitRequestStudent(id));
  }, [dispatch]);

  const applyHandler = (e) => {
    e.preventDefault();
    dispatch(thunkApplyStudentRequest(id));
    window.location.href = '/';
  };

  const delHandler = (e) => {
    e.preventDefault();
    dispatch(thunkDelStudentRequest(id));
    window.location.href = '/';
  };

  return (
    <>
      <div>RequestForm</div>
      <div className="cardInfo">
        <img src={`/img/${admin?.photo}`} />
        <h5 className="item-title">{admin?.email}</h5>
        <h5 className="item-price">{admin?.name}</h5>
        <h5 className="item-price">{admin?.phone}</h5>
        <button onClick={applyHandler} className="btnAdmin">
          Принять
        </button>
        <button onClick={delHandler} className="btnAdmin">
          Отклонить
        </button>
      </div>
    </>
  );
}

export default RequestStudent;
