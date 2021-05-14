import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { INIT_ONE_ORGANIZATION } from '../redux/actionTypes/actionTypes';

function OrganizationView(props) {

  const {organization} = useSelector((state) => state.organization); 
  const dispatch = useDispatch();
  const {id} = useParams()

  useEffect(() => {
    fetch(`/organizations/org:${id}`)
    .then(response => response.json() )
    .then(body => {
      dispatch({
        type: INIT_ONE_ORGANIZATION,
        payload: body[0]
      })
    })
    .catch((error) => {
      console.log(error)
    });
  }, [])

  return (
    <div>
      {organization.name}
      {organization.rate}
      {organization.comment}
      {organization.vacansion}
    </div>
  );
}

export default OrganizationView;
