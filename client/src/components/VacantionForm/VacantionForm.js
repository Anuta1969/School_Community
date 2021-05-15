import React, { useRef } from 'react';

import { useHistory } from 'react-router';
import { addVacantion } from '../../redux/Thunk/VacantionThunk';
import {useDispatch, useSelector} from "react-redux";
function VacantionsForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const student = useSelector(state=>state.student)

  const id = student._id
  const organization = useRef();
  const vacantion = useRef();
  const description = useRef();

  const formHandler = (event) => {
    event.preventDefault();

     
      dispatch(addVacantion(organization.current.value,vacantion.current.value,
        description.current.value,id))
      event.target.reset()
    history.push('/vacantions');
  };

  return (
    <div className="vacantion container d-flex flex-column text-center" >
      <form method="POST" onSubmit={formHandler} className='text-center'>
        <h3>Добавить Вакансию</h3>
        
        <input
        ref={vacantion}
          name="vacantion"
          className="form-control text-center"
          type="text"
          placeholder="введите вакансию"
        />

<input
        ref={organization}
          className="form-control text-center"
          name="organization"
          type="text"
          placeholder="введите организацию"
        />
        

        <textarea
        ref={description}
          name="description"
          className="form-control text-center p-2 m-auto"
          type="text"
          placeholder="введите описание"
          rows="5" cols="15"
        />

        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default VacantionsForm;
