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
  const date = useRef();
  const description = useRef();

  const formHandler = (event) => {
    event.preventDefault();
const actuality = event.target.actuality.value
     
      dispatch(addVacantion(organization.current.value,vacantion.current.value,
        date.current.value,
        description.current.value,actuality,id))
      event.target.reset()
    history.push('/vacantions');
  };

  return (
    <div className="vacantion container d-flex flex-column">
      <form method="POST" onSubmit={formHandler}>
        <h3>Добавить Вакансию</h3>
        
        <input
        ref={vacantion}
          name="vacantion"
          className="form-control"
          type="text"
          placeholder="введите вакансию"
        />

<input
        ref={organization}
          className="form-control"
          name="organization"
          type="text"
          placeholder="введите организацию"
        />
        <input
        ref={date}
          name="date"
          className="form-control"
          type="date"
          placeholder="введите дату"
        />

        <input
        ref={description}
          name="description"
          className="form-control"
          type="text"
          placeholder="введите описание"
        />
        <div className="form-check container d-flex flex-column">
          <input
            className="form-check-input"
            type="radio"
            name="actuality"
            id="flexRadioDefault1"
            defaultChecked
            value="actual"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            actual
          </label>        
        
          <input
            className="form-check-input"
            type="radio"
            name="actuality"
            id="flexRadioDefault2"
            value="not_actual"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            not actual
          </label>
        </div>

        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default VacantionsForm;
