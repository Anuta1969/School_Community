import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Org.css'

function Organization({ org, ind }) {
 
  const selector = '.org' + ind + '.ratingActive'
  const actualVacantion = org.vacantion
  const rate = org.totalRating
  
  useEffect( () => {

      setRateActiveWidth(rate)

  }, [org])
  
  function setRateActiveWidth(rate) {
    let ratingActive = document.querySelector(selector)
    const ratingActiveWidth = rate / 0.05
    ratingActive.style.width = `${ratingActiveWidth}%`
  }
  
  return (
      <Link key={ind} to={`/organizations/org/${org?._id}` }>
        <div className="card me-5 mb-4 orgCard">
            <div className="card ">
              <div className="card-body">
                  <div className="card-header">
                    <h5 className="card-title">{org?.name}</h5>

                    {/* Блок для отрисовки рейтинга */}
                      <div className={`  rating`} >
                        <div className='ratingBody'>
                          <div className={`${'org' + ind} ratingActive`}></div>
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
                <p className="card-text">
                  Последний отзыв: {org.comment.length? org.comment[org.comment.length - 1].text : 'отзывов пока нет'}
                  </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                {actualVacantion[actualVacantion.length - 1]?.vacantion
                  ? <p> Последняя вакансия: {`${actualVacantion[actualVacantion.length - 1]?.vacantion }`} </p>
                  : <p> Вакансии еще не размещались </p>
                }
                  </small>
              </div>
            </div>
          </div>
      </Link>
  )

}

export default Organization;
