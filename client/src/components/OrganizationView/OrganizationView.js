import './OrganizationView.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { thunkOrgInit } from '../../redux/Thunk/ThunkOrganization';
import { ThunkInitVacantion } from '../../redux/Thunk/VacantionThunk';
import Icon from '@iconify/react';
import iosStar from '@iconify-icons/ion/ios-star';


const rating = ['','','','','']  //массив для отрисовки звезд в рейтинге

function OrganizationView() {

  const dispatch = useDispatch()
  const {id} = useParams()

  const organization = useSelector(state => state.organization).filter(el => el._id === id)[0]
  const activeVacantion = useSelector(state => state.vacantion).filter(el => el.organization.toLowerCase() == organization.findName).filter(el => el.relevance == true)
  const archiveVacantion = useSelector(state => state.vacantion).filter(el => el.organization.toLowerCase() == organization.findName).filter(el => el.relevance == false)

  const [showArchiveFlag, setShowArchiveFlag] = useState(false)
  const [showCommentFlag, setShowCommentFlag] = useState(false)
  const [addCommentFlag, setAddCommentFlag] = useState(false)
  const [rate, setRate] = useState(organization?.rate)
  const [newRateInComment, setNewRateInComment] = useState(0)
  // console.log(organization?.rate );

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

  const addCommentFunction = (event) => {
    event.preventDefault()
    setAddCommentFlag(!addCommentFlag)
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

// обработка добавления отзыва и рейтинга
const formCommentHandler = (event) => {
  event.preventDefault();
  console.log('рейтинг: ', newRateInComment);
  console.log('комментарий: ', event.target.comment.value);
    // dispatch(thunkAddComment(
    //   organization, 
    //   event.target.comment.value, 
    //   newRateInComment, 
    //   ))

    setAddCommentFlag(!addCommentFlag)
};


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
               <button onClick={addCommentFunction}> {!addCommentFlag? <h6>оставить отзыв</h6> : <h6>скрыть</h6>  } </button>

            {addCommentFlag
              ? <div className="organization container d-flex flex-column">
                <form method="POST" onSubmit={formCommentHandler}>
                  
                    <p> Оцените организацию {rating.map((el,i) => {
                          return <Icon 
                                    name={i} 
                                    key={i} 
                                    style={{color: (i+1) <= newRateInComment?"red":"initial"}} 
                                    icon={iosStar} onClick={() => {setNewRateInComment(i+1);}} />
                          })}
                    </p> 
          
                    <div className="form-floating">
                      <textarea className="form-control m-3" name="comment" ></textarea>
                      <label className="ms-2" htmlFor="floatingTextarea2">Ваше мнение об организации</label>
                    </div>
                  
                    <button type="submit">Добавить</button>  
                    </form>
                 </div>

                : null }
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
