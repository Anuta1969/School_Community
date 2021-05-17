import { addVacantionAC,initVacantionAC,initOneCardAC } from '../../redux/actionCreators/actionCreatorVacantion';
import {useState} from "react";

export const addVacantion = (organization,vacantion,description,salary,id)=>{
  return (dispatch)=>{
    fetch(`${process.env.REACT_APP_URL}/vacantion`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        organization: organization,
        vacantion: vacantion,
        description:description,
        salary:salary,
        id:id})})
      .then((res) => res.json())
      .then((data) => dispatch(addVacantionAC(data.newVacantions) ))
      .catch(err => console.log(err))
  }
}

export const ThunkInitVacantion = ()=>{
  return (dispatch)=>{
    fetch(`${process.env.REACT_APP_URL}/vacantion`)
    .then(res=>res.json())
    .then(data=>dispatch(initVacantionAC(data)))
    .catch(err => console.log(err))
  }
}


export const ThunkInitOneVacantion = (id)=>{
  return (dispatch)=>{
    fetch(`${process.env.REACT_APP_URL}/vacantion/${id}`)
    .then(res=>res.json())
    .then(data=>dispatch(initOneCardAC([data])))
    .catch(err => console.log(err))
  }
}
