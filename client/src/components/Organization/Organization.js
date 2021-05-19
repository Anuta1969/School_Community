import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Org.css'

function Organization({ org, ind, vacantion }) {
 
  // const actualVacantion = vacantion.filter(el => el?.organization.toLowerCase() == org.findName)
  const selector = '.org' + ind + '.ratingActive'
  const actualVacantion = org.vacantion
  console.log(actualVacantion);
  
  useEffect( () => {
    if (org.rate.length !== 0) {
      const currentRating = ( org.rate.reduce( (a, b) =>  (a + b) ) / org?.rate.length  )
      setRateActiveWidth(currentRating)
    } else {
      setRateActiveWidth(0)
    }
  }, [org.rate])
  
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
                  Последний отзыв: {org?.comment[org?.comment.length - 1].text}
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
