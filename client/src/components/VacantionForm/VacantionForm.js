import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addVacantionAC } from '../../redux/actionCreators/actionCreatorVacantion';

function VacantionsForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const organization = useRef();
  const vacantion = useRef();
  const date = useRef();
  const description = useRef();

  const formHandler = (event) => {
    event.preventDefault();
const actuality = event.target.actuality.value
console.log(actuality+'1111');
    fetch('/vacantion', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        organization: organization.current.value,
        vacantion: vacantion.current.value,
        date:date.current.value,
        description:description.current.value,
        relevance:actuality
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addVacantionAC(data.vacantions) ));
      event.target.reset()
    // После Redux Thunk
    //dispatch(fetchAddStudent(nameInput.current.value, ageInput.current.value))

    // После Redux Saga
    //dispatch(sagaAddStudents({name:nameInput.current.value, age:ageInput.current.value}))

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
