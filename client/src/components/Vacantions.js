import React from 'react';

function Vacantions(props) {
  return (
    <div className="vacantion container d-flex flex-column">
      <form method="POST">
        <h3>Добавить Вакансию</h3>
        <input
          className="form-control"
          name="organization"
          type="text"
          placeholder="введите организацию"
        />
        <input
          name="name"
          className="form-control"
          type="text"
          placeholder="введите вакансию"
        />
        <input
          name="date"
          className="form-control"
          type="text"
          placeholder="введите дату"
        />

        <input
          name=""
          className="form-control"
          type="text"
          placeholder="введите описание"
        />
        <input type="text" className="form-control" placeholder="enter email" />
        <input
          type="password"
          className="form-control"
          placeholder="enter password"
        />
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="actuality"
            id="flexRadioDefault1"
            checked
            value='actual'
          />
          <label class="form-check-label" for="flexRadioDefault1">
            actual
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="actuality"
            id="flexRadioDefault2"
            value='not_actual'
          />
          <label class="form-check-label" for="flexRadioDefault2">
           not actual
          </label>
        </div>

        <button>Добавить</button>
      </form>
    </div>
  );
}

export default Vacantions;
