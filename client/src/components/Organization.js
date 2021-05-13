import React from 'react';

function Organization({organization}) {
  return (
    
      <div className="card">
        <div class="card-header">
        <h5 className="card-title">ООО "Рога и копыта"&nbsp; &nbsp;  *****</h5>
          <ul class="nav nav-pills card-header-pills d-flex justify-content-around">
            <li class="nav-item">
              <a class="nav-link active" href="#">Информация</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Вакансии</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/posts">Отзывы</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/posts">Оставить отзыв</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {/* <h5 className="card-title">ООО "Рога и копыта"</h5>
          <p class="card-text">Рейтинг *****</p>
          <p class="card-text">г.Москва</p>
          <a href="#" class="btn btn-primary">ОСТАВИТЬ ОТЗЫВ</a> */}
        </div>   
      </div>

  );
}

export default Organization;
