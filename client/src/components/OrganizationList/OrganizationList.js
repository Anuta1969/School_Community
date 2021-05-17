import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Organization from '../Organization/Organization';
import OrganizationAddForm from '../OrganizationAddForm/OrganizationAddForm';
import { thunkOrgListInit } from '../../redux/Thunk/ThunkOrganization'


function OrganizationList() {
  const organization = useSelector(state => state.organization);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkOrgListInit())
  }, [dispatch])


  return (
    <>
    <OrganizationAddForm />

    <div className="container d-flex flex-wrap mt-5">
       { organization?.map((el,i ) => <Organization org={el} ind={i}id={el._id} key={el._id} />) }
    </div>
      </>
  );
}

export default OrganizationList;
