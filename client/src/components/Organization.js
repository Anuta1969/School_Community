import React from 'react';

function Organization({organization}) {
  return (
    <div className="card">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">Информация</a>
          </li>
          <li class="nav-item">
             <a class="nav-link" href="#">Вакансии</a>
          </li>
          <li class="nav-item">
             <a class="nav-link" href="#">Отзывы</a>
          </li>
        </ul>
       </div>
      <div className="card-body">
        <h5 className="card-title">{organization.name}</h5>
        <p class="card-text">{organization.rate}</p>
        <p class="card-text">Общая информация об организации - сфера деятельности, город и т.п.</p>
        <a href="#" class="btn btn-primary">ОСТАВИТЬ ОТЗЫВ</a>
      </div>   
    </div>
  );
}

export default Organization;
