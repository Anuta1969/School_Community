import './OrganizationView.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { thunkAddComment, thunkOrgInit } from '../../redux/Thunk/ThunkOrganization';
import Icon from '@iconify/react';
import iosStar from '@iconify-icons/ion/ios-star';
const rating = ['','','','','']  //массив для отрисовки звезд в рейтинге
function OrganizationView() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const organizationInitial = useSelector(state => state.organization)
  const student = useSelector(state => state.student._id)
  const vacancy = organizationInitial.vacantion
  const comments = organizationInitial.comment
  const [activeVacantion, setActiveVacantion] = useState([])
  const [archiveVacantion, setArchiveVacantion] = useState([])
  const [showArchiveFlag, setShowArchiveFlag] = useState(false)
  const [showCommentFlag, setShowCommentFlag] = useState(true)
  const [addCommentFlag, setAddCommentFlag] = useState(false)
  const [newRateInComment, setNewRateInComment] = useState(0)
  // инициализация организации
  useEffect( () => {
    dispatch( thunkOrgInit(id) )
  }, [dispatch])
  // фильтр для активных вакансий
  useEffect( () => {
    setActiveVacantion( vacancy?.filter(el => el.relevance === true) )
    setArchiveVacantion( vacancy?.filter(el => el.relevance === false) )
    if (organizationInitial.rate) {
      const currentRating = ( organizationInitial?.rate.reduce( (a, b) =>  (a + b) ) / organizationInitial?.rate.length  )
      setRateActiveWidth(currentRating)
    } else {
      setRateActiveWidth(0)
    }
  }, [organizationInitial, dispatch])
  // обработка флага для показа архивных вакансий
  const showArchiveFunction = (event) => {
    event.preventDefault()
    setShowArchiveFlag(!showArchiveFlag)
  }
  // обработка флага для показа комментариев
  const showCommentFunction = (event) => {
    event.preventDefault()
    setShowCommentFlag(!showCommentFlag)
  }
  // обработка флага для открытия формы отзыва
  const addCommentFunction = (event) => {
    event.preventDefault()
    setAddCommentFlag(!addCommentFlag)
  }
// обработка добавления отзыва и рейтинга
  const formCommentHandler = (event) => {
    event.preventDefault();
      dispatch( thunkAddComment(
        organizationInitial, 
        event.target.comment.value, 
        newRateInComment,
        student 
        ))
    setAddCommentFlag(!addCommentFlag)
    window.location.href=`/organizations/org/${id}`
  };

  // функция, отрисовывающая рейтинг звездами:
  function setRateActiveWidth(rate) {
    let ratingActive = document.querySelector('.ratingActive')
    const ratingActiveWidth = rate / 0.05
    ratingActive.style.width = `${ratingActiveWidth}%`
  }
  return (
    <>
      <div className="organization_container container justify-content-center text-center">
        <div className="card_info">
          <h3 className="card-title card_text_title">{organizationInitial?.name}</h3>
          <div className="card_text">Текущий рейтинг:&nbsp;
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
                                   {/* блок отзывов */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Последний отзыв:&nbsp;{comments? comments[comments.length - 1].text : 'отзывов пока нет'}
             <p>  <button onClick={addCommentFunction}> {!addCommentFlag? <h6>оставить отзыв</h6> : <h6>скрыть</h6>  } </button> </p>
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
            {activeVacantion?.map(el => {return <p key={el._id}> <a href={`http://localhost:3000/vacantion/${el._id}`}>  {el.vacantion} </a> </p> })}
          </li>
        </ul>
        <div className="">
          <button onClick={showArchiveFunction} className="card-link">Архив вакансий</button>
          {
           showCommentFlag 
            ? <button onClick={showCommentFunction} className="card-link">Скрыть отзывы</button> 
            : <button onClick={showCommentFunction} className="card-link">Показать отзывы</button> 
          }
        </div>
                                                   {/* блок орисовки архивных вакансий */}
        {showArchiveFlag
          ? archiveVacantion.length
            ? <div className='container '>
                Cписок неактивных вакансий:
                <h4>{archiveVacantion.map(el => {return <p key={el._id}> <a href={`http://localhost:3000/vacantion/${el._id}`}>  {el.vacantion} </a> </p> })}</h4>
              </div>
            : <h3>У текущей организации пока нет вакансий в архиве</h3>
          :null}
                                                          {/* блок отрисовки всех комментариев */}
        {
          showCommentFlag ? <div>
                            {
                            comments? <div> {comments?.map(el => {return <div key={el._id}>{`${el.text}`} Автор отзыва {`${el.authorName}`}</div> } )}  </div> 
                            : <p>Отзывов пока нет</p>
                            }
                          </div>
                        : null}
     </div>
    </>
  )
}
export default OrganizationView;
