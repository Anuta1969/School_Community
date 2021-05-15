import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { initOrganizationsAC } from '../../redux/actionCreators/actionCreatorOrganization';
import Organization from '../Organization/Organization';
import OrganizationAddForm from '../OrganizationAddForm/OrganizationAddForm';

function OrganizationList() {
  
  const organization = useSelector(state => state.organization); 
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/organizations')
    .then(response => response.json() )
    .then(body => {
      dispatch( initOrganizationsAC(body) )
    })
    .catch((error) => {
      console.log(error)
    });
  }, [dispatch])


  return (
    <>
    <OrganizationAddForm />

    <div className="container d-flex flex-wrap mt-5">
       { organization?.map(el => <Organization org={el} key={el._id} />) }
    </div>
      </>
  );
}

export default OrganizationList;
