import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Organization from '../Organization/Organization';
import OrganizationAddForm from '../OrganizationAddForm/OrganizationAddForm';
import { thunkOrgListInit } from '../../redux/Thunk/ThunkOrganization'
import Rating from '../Rating/Rating';

function OrganizationList() {
  
  const organization = useSelector(state => state.organization); 
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkOrgListInit())
  }, [dispatch])


  return (
    <>
  <p><Rating /></p>
    <OrganizationAddForm />

    <div className="container d-flex flex-wrap mt-5">
       { organization?.map(el => <Organization org={el} key={el._id} />) }
    </div>
      </>
  );
}

export default OrganizationList;
