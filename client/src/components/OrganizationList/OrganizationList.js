import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { INIT_ORGANIZATIONS } from '../../redux/actionTypes/actionTypes';
import Organization from '../Organization/Organization';

function OrganizationList() {
  
  const {organization} = useSelector((state) => state.organization); 
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/organizations')
    .then(response => response.json() )
    .then(body => {
      dispatch({
        type: INIT_ORGANIZATIONS,
        payload: body
      })
    })
    .catch((error) => {
      console.log(error)
    });
  }, [dispatch])


  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
       { organization.map(org => 
        <Organization org={org} key={org._id}/>
      ) }
    </div>

  );
}

export default OrganizationList;
