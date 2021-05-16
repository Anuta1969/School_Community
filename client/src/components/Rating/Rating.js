import React from 'react';

function Rating(props) {

  const ratingStyles = {
    
  }

  return (
    <>
    <div classname='ratingBody'>
      <div classname='ratingActive'></div>
      <div classname='ratingItems'>
        <input type="radio" classname='ratingItem' value='1' name="rating" />
        <input type="radio" classname='ratingItem' value='2' name="rating" />
        <input type="radio" classname='ratingItem' value='3' name="rating" />
        <input type="radio" classname='ratingItem' value='4' name="rating" />
        <input type="radio" classname='ratingItem' value='5' name="rating" />
      </div>
    </div>
    <div className="ratingValue">3.4</div>
    </>
  );
}

export default Rating;
