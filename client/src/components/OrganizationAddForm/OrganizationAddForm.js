import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addOrganizationAC } from '../../redux/actionCreators/actionCreatorOrganization';
import { thunkOrgAdd } from '../../redux/Thunk/ThunkOrganization';
// import Rating from '../Rating/Rating';

// const rateStyles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };


function OrganizationAddForm(props) {
  
  const [addOrgFlag, setaddOrgFlag] = useState(false)

  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();

      dispatch(thunkOrgAdd( 
        event.target.organization.value, 
        event.target.comment.value, 
        event.target.rate.value
        ))
      event.target.reset()
  };

  const addOrgFunction = (event) => {
    event.preventDefault()
    setaddOrgFlag(!addOrgFlag)
  }

  return (
    <>
        <button onClick={addOrgFunction}><h3>Добавить организацию</h3></button>
    { addOrgFlag? 
      
    <div className="organization container d-flex flex-column">
      <form method="POST" onSubmit={formHandler}>
        
          <input
            name="organization"
            className="form-control m-3"
            type="text"
            placeholder="название организации"
          />

          <input
            name="rate"
            className="form-control m-3"
            type="number"
            placeholder="оцените организацию от 1 до 5"
          />

          {/* <div style={rateStyles}> */}
          {/* <span className="iconify" data-icon="ion-ios-star" data-inline="false"> */}
            {/* <Rating key={Date.now} rating={5} /> */}
          {/* </span> */}
          {/* </div> */}

          <div className="form-floating">
            <textarea className="form-control m-3" name="comment" ></textarea>
            <label className="ms-2" htmlFor="floatingTextarea2">Ваше мнение об организации</label>
          </div>
        
          <button type="submit">Добавить</button>  
          </form>
          </div>
        : null}
        </>
  );
}

export default OrganizationAddForm;
