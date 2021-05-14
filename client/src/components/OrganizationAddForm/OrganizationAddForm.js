import React from 'react';
import { useDispatch } from 'react-redux';
import { addOrganizationAC } from '../../redux/actionCreators/actionCreatorOrganization';

function OrganizationAddForm(props) {
  
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();

    fetch('/organizations/add', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        organization: event.target.organization.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addOrganizationAC(data.newOrganization)))
      event.target.reset()
  };

  return (
    <div className="organization container d-flex flex-column">
      <form method="POST" onSubmit={formHandler}>
        <h3>Добавить организацию</h3>
        <input
        
          name="organization"
          className="form-control m-3"
          type="text"
          placeholder="введите название организации"
        />
        
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default OrganizationAddForm;
