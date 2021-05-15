import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrganizationAC } from '../../redux/actionCreators/actionCreatorOrganization';
import Rating from '../Rating/Rating';

const rateStyles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


function OrganizationAddForm(props) {
  
  const [addOrgFlag, setaddOrgFlag] = useState(false)

  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();

    fetch('/organizations/add', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        organization: event.target.organization.value,
        comment: event.target.comment.value,
        rate: event.target.rate.value
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addOrganizationAC(data.newOrganization)))
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

          <div style={rateStyles}>
          <Rating rating={5} />
          </div>

          <div className="form-floating">
            <textarea className="form-control m-3" name="comment" ></textarea>
            <label className="ms-2" for="floatingTextarea2">Ваше мнение об организации</label>
          </div>
        
          <button type="submit">Добавить</button>  
          </form>
          </div>
        : null}
        </>
  );
}

export default OrganizationAddForm;
