// import React, { useState } from "react";


// function Rating(rating) {

//   const [rate, setRate] = useState()

//   setRate({
//     rating: rating,
//     temp_rating: null
//   });

// function handleMouseover(rating) {
//   setRate(prev => ({
//     rating,
//     temp_rating: prev.rating
//   }));
// }

// function handleMouseout() {
//   // this.state.rating = this.state.temp_rating;
//   // this.setState({ rating: this.state.rating });
//   this.setState(prev => ({
//     rating: prev.temp_rating
//   }));
// }

// function rateRating(rating) {
//   setRate({
//     rating,
//     temp_rating: rating
//   });
// }

// function rend() {
//   // const { rating } = this.state;
//   let stars = [];
//   for (let i = 0; i < 10; i++) {
//     console.log("i", i);
//     let klass = "ion-ios-star-outline";
//     if (rating >= i && rating !== null) {
//       klass = "ion-ios-star";
//     }
//     stars.push(
//       <i
//         style={{ display: "inline-block", width: "7px", overflow: "hidden", direction: (i%2===0) ? "ltr" : "rtl"}}
//         className={klass}
//         onMouseOver={() => handleMouseover(i)}
//         onClick={() => rateRating(i)}
//         onMouseOut={() => handleMouseout()}
//       />
//     );
//   }

  
//   return (
//     <div className="rating">
//       {stars}
//     </div>
//   );
// }

// }




// export default Rating;
