import { useEffect } from 'react';

import './Rating.css';



function Rating() {

  const rate = 2.7
   
  function setRateActiveWidth(index = rate) {
    let ratingActive = document.querySelector('.ratingActive')
    const ratingActiveWidth = index / 0.05
    return ratingActive.style.width = `${ratingActiveWidth}%`
  }


  useEffect(() => {
    setRateActiveWidth()
  }, [rate])

  return (
    <>
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
    </>
  );
  
}

export default Rating;
