import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Org.css'

function Organization({ org, ind }) {
  const rate1 = org.rate
  const selector = '.org' + ind + '.ratingActive'

   function setRateActiveWidth(rate) {
    let ratingActive = document.querySelector(selector)
    const ratingActiveWidth = rate / 0.05
    ratingActive.style.width = `${ratingActiveWidth}%`
  }

  useEffect(() => {
    setRateActiveWidth(rate1)
  }, [])

  return (
    <div className="card me-5 mb-4 orgCard">
        <div className="card ">
          <div className="card-body">
           <Link  to={`/organizations/org/${org?._id}` }>
            <div className="card-header">
              <h5 className="card-title">{org?.name}</h5>

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
         </Link>
            <p className="card-text">
              Последний комментарий: {org?.comment}
              </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Текущая вакансия: {org?.vacansion}
              </small>
          </div>
        </div>
      </div>
  )

}

export default Organization;
