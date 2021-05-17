import './OrganizationView.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { thunkOrgInit } from '../../redux/Thunk/ThunkOrganization';
import { ThunkInitOneVacantion } from '../../redux/Thunk/VacantionThunk';
import VacantionCard from '../Vacantions/VacantionCard';

function OrganizationView() {
  
  const dispatch = useDispatch()
  const {id} = useParams()
  const organization = useSelector(state => state.organization).filter(el => el._id === id)[0]
  const activeVacantion = useSelector(state => state.vacantion)
  console.log(organization?.vacantion);
  const [showArchiveFlag, setShowArchiveFlag] = useState(false)
  
  const showArchiveFunction = (event) => {
    event.preventDefault()
    setShowArchiveFlag(!showArchiveFlag)
  }

  useEffect(() => {
    dispatch( thunkOrgInit(id) )
  }, [dispatch])

  useEffect(() => {
   dispatch( ThunkInitOneVacantion(organization?.vacantion[0]) )
 },[organization]);
  
  const rate = organization?.rate

  if (organization) {
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

          <li className="list-group-item">Последний отзыв:&nbsp;{organization?.comment}
          <button>оставить отзыв</button>
          </li>

          <li className="list-group-item">Активные вакансии:&nbsp;
            <a href={`http://localhost:3000/vacantion/${activeVacantion[0]?._id}`}>{activeVacantion[0]?.vacantion}</a>
          </li>
        </ul>
        <div className="card-body">
          <button onClick={showArchiveFunction} className="card-link">Архив вакансий</button>
          <a href="#" className="card-link">Все отзывы</a>
        </div>
      </div>
    
    {showArchiveFlag
      ?   <div className='container d-flex flex-wrap'>
            {organization?.vacantion.map(vac=>{
              return  <VacantionCard vacantion={vac} key={vac._id}/>
            })}
          </div>
    :null
  }
    </>
  );
}

export default OrganizationView;
