import './OrganizationView.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { thunkOrgInit } from '../../redux/Thunk/ThunkOrganization';
import { ThunkInitVacantion } from '../../redux/Thunk/VacantionThunk';

function OrganizationView() {

  const dispatch = useDispatch()
  const {id} = useParams()

  const organization = useSelector(state => state.organization).filter(el => el._id === id)[0]
  const activeVacantion = useSelector(state => state.vacantion).filter(el => el.organization.toLowerCase() == organization.findName).filter(el => el.relevance == true)
  const archiveVacantion = useSelector(state => state.vacantion).filter(el => el.organization.toLowerCase() == organization.findName).filter(el => el.relevance == false)

  const [showArchiveFlag, setShowArchiveFlag] = useState(false)
  const [showCommentFlag, setShowCommentFlag] = useState(false)
  const [rate, setRate] = useState(organization?.rate)
  console.log(activeVacantion );
  // код для расчета среднего арифметического рейтинга из массива
  // const [rate, setRate] = useState( organization?.rate.reduce( (a, b) => a + b ) / organization?.rate.length + 1  )

  const showArchiveFunction = (event) => {
    event.preventDefault()
    setShowArchiveFlag(!showArchiveFlag)
  }

  const showCommentFunction = (event) => {
    event.preventDefault()
    setShowCommentFlag(!showCommentFlag)
  }


  useEffect( () => {
    setRate( organization?.rate )
  }, [organization])

  useEffect( () => {
    dispatch( thunkOrgInit(id) )
  }, [dispatch])

  useEffect( () => {
    dispatch( ThunkInitVacantion() )
}, [dispatch])


  if (organization) {
    setRateActiveWidth(rate)
  }

  // функция, отрисовывающая рейтинг звездами:
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

            {/* Блок для отрисовки рейтинга */}
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
            {activeVacantion.map(el => {return <p key={el._id}> <a href={`http://localhost:3000/vacantion/${el._id}`}>  {el.vacantion} </a> </p> })}
          </li>
        </ul>

        <div className="card-body">
          <button onClick={showArchiveFunction} className="card-link">Архив вакансий</button>
          <button onClick={showCommentFunction} className="card-link">Все отзывы</button>
        </div>
      </div>

    {/* блок орисовки архивных вакансий */}
    {showArchiveFlag
      ?   archiveVacantion.length
            ? <div className='container '>
              Cписок неактивных вакансий:
              <h4>{archiveVacantion.map(el => {return <p key={el._id}> <a href={`http://localhost:3000/vacantion/${el._id}`}>  {el.vacantion} </a> </p> })}</h4>
             </div>
            : <h3>У текущей организации пока нет вакансий в архиве</h3>

      :null
    }
      {/* блок отрисовки всех комментариев */}
    {showCommentFlag
      ? <h2>Все отзывы</h2>
      : null
    }

    </>
  );
}

export default OrganizationView;
