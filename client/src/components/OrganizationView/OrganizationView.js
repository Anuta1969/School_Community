import './OrganizationView.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { thunkAddComment, thunkOrgInit } from '../../redux/Thunk/ThunkOrganization';
import Icon from '@iconify/react';
import iosStar from '@iconify-icons/ion/ios-star';
import Comment from '../Сomment/Comment';

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
    setRateActiveWidth(organizationInitial.totalRating)
  }, [organizationInitial, dispatch])

  console.log(activeVacantion);
  console.log(archiveVacantion);

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

        <div className='container paramsOrg'>
          <div className= "paramsOrg-box">
          <h3 className="card-title card_text_title">{organizationInitial?.name}</h3>
          <div className="cardOrgBody"><p>Текущий рейтинг:&nbsp;</p>

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



                                   {/* блок отзывов */}
        <div className="orgInfo">
          <div className="reviewBlock">
            <h4 className='lastReview'> Последний отзыв:&nbsp;</h4><p>{comments? comments[comments.length - 1]?.text : 'отзывов пока нет'}</p>
             <div>  <button className='addReview' onClick={addCommentFunction}> {!addCommentFlag? <h6>Оставить отзыв</h6> : <h6>Скрыть</h6>  } </button> </div>
            {addCommentFlag
              ? <div className="orgReviewCont organization container d-flex flex-column">
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
                        <textarea className="form-control m-3" name="comment" required={true} ></textarea>
                        <label className="ms-2" htmlFor="floatingTextarea2">Ваше мнение об организации</label>
                      </div>
                      <button className='addReview' type="submit">Добавить</button>
                    </form>
                 </div>
                : null }

          </div>
          <div className="linkToVac">Активные вакансии:&nbsp;
            {activeVacantion?.map(el => {return <p key={el._id}> <a href={`http://localhost:3000/vacantion/${el._id}`}>  {el.vacantion} </a> </p> })}
          </div>
        </div>
        <div className="btnBlockOrg">
          <button onClick={showArchiveFunction} className="card-linkBtn">Архив вакансий</button>

          {
           showCommentFlag
            ? <button onClick={showCommentFunction} className="card-linkBtn">Скрыть отзывы</button>
            : <button onClick={showCommentFunction} className="card-linkBtn">Показать отзывы</button>
          }
        </div>
          </div>

                                                   {/* блок орисовки архивных вакансий */}
                    <div className='blockForAll'>
         <div className='blockForVacancy'>
        {showArchiveFlag
          ? archiveVacantion.length
            ? <div className='reviewAuthor '>
                <p className="reviewAuthor-title">Cписок неактивных вакансий:</p>
                <div className="reviewAuthor-item reviewAuthor-item-vacansion">{archiveVacantion.map(el => {return <p key={el._id}> <a href={`http://localhost:3000/vacantion/${el._id}`}>  {el.vacantion} </a> </p> })}</div>
              </div>
            : <h3 className='h3Org'>{ `У ${organizationInitial?.name} нет вакансий в архиве` }</h3>
          :null}
         </div>
                         <div className="comment-AboutWork">                                 {/* блок отрисовки всех комментариев */}
        {
          showCommentFlag ? <div className='blockForComment'> {

                            comments? <div className="comment-AboutBlock"> {comments?.map(el =>  <Comment key={el._id} comment={el}/> ) } </div>
                                     : <p>Отзывов пока нет</p>

        }</div>
                        : null}
                         </div>
        </div>
        </div>
     </div>
    </>
  )
}
export default OrganizationView;
