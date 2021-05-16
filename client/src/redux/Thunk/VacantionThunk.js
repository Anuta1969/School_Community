import { addVacantionAC,initVacantionAC,initOneCardAC } from '../../redux/actionCreators/actionCreatorVacantion';



export const addVacantion = (organization,vacantion,description,id)=>{
  return (dispatch)=>{

    fetch(`${process.env.REACT_APP_URL}/vacantion`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({

        organization: organization,
        vacantion: vacantion,
        description:description,
        id:id

      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addVacantionAC(data.newVacantions) ));
      
  }
}



export const ThunkInitVacantion = ()=>{
  return (dispatch)=>{
    fetch(`${process.env.REACT_APP_URL}/vacantion`)
    .then(res=>res.json())
    .then(data=>dispatch(initVacantionAC(data)))
  }
}


export const ThunkInitOneVacantion = (id)=>{
  return (dispatch)=>{
    fetch(`${process.env.REACT_APP_URL}/vacantion/${id}`)
    .then(res=>res.json())
    .then(data=>dispatch(initOneCardAC([data])))
  }
}
