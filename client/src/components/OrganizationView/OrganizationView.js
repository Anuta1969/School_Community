import './OrganizationView.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { thunkOrgInit } from '../../redux/Thunk/ThunkOrganization';

function OrganizationView() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const organization = useSelector(state => state.organization).filter(el => el._id === id)[0]

  useEffect(() => {
    dispatch( thunkOrgInit(id) )
  }, [dispatch])

  const rate = organization?.rate

  if (rate) {
    setRateActiveWidth(rate)
  }
  
 function setRateActiveWidth(rate) {
    let ratingActive = document.querySelector('.ratingActive')
    const ratingActiveWidth = rate / 0.05
    ratingActive.style.width = `${ratingActiveWidth}%`
  }
  
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{organization?.name}</h4>
          <div className="card-text">Текущий рейтинг:&nbsp;

            <div className='rating' >
              <div className='ratingBody'>
                <div className='ratingActive'></div>
                  <div className='ratingItems'>
                    <input type="radio" className='ratingItem' value='1' name="rating" />
                    <input type="radio" className='ratingItem' value='2' name="rating" />
                    <input type="radio" className='ratingItem' value='3' name="rating" />
                    <input type="radio" className='ratingItem' value='4' name="rating" />
                    <input type="radio" className='ratingItem' value='5' name="rating" />
                  </div>
                </div>
              <div className="ratingValue"></div>
            </div>

          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Последний комментарий:&nbsp;{organization?.comment}</li>
          <li className="list-group-item">Активные вакансии:&nbsp;{organization?.vacansion}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Архив вакансий</a>
          <a href="#" className="card-link">Все отзывы</a>
        </div>
      </div>
    </>
  );
}

export default OrganizationView;
