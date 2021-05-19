import { addVacantionAC,initVacantionAC,initOneCardAC,editActualVacantionAC } from '../../redux/actionCreators/actionCreatorVacantion';

export const addVacantion = (organization,vacantionValue,description,salary,id)=>{
  return (dispatch)=>{
    fetch(`${process.env.REACT_APP_URL}/vacantion`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        organization: organization,
        vacantion: vacantionValue,
        description:description,
        salary:salary,
        id:id})})
      .then((res) => res.json())     
      .then((data) =>
       {
        if(data.message){
          alert(data.message)
        }

        else{

          return dispatch(addVacantionAC(data.newVacantions))
        }
      })
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


export const ThunkEditVacantion = (id,relevance)=>{
  return (dispatch)=>{
    fetch(`${process.env.REACT_APP_URL}/vacantion/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({

        relevance:relevance})})
      .then((res) => res.json())
      .then((data) => dispatch(editActualVacantionAC(data)))
      .catch(err => console.log(err))
  }
}


