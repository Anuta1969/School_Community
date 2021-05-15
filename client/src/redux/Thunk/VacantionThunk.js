import { addVacantionAC,initVacantionAC } from '../../redux/actionCreators/actionCreatorVacantion';



export const addVacantion = (organization,vacantion,date,description,actuality,id)=>{
  return (dispatch)=>{

    fetch('/vacantion', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({

        organization: organization,
        vacantion: vacantion,
        date:date,
        description:description,
        relevance:actuality,
        id:id

      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addVacantionAC(data.vacantions) ));
      
  }
}



export const ThunkInitVacantion = ()=>{
  return (dispatch)=>{
    fetch(`/vacantion`)
    .then(res=>res.json())
    .then(data=>dispatch(initVacantionAC(data)))
  }
}
