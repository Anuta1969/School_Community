import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { initVacantionAC } from '../../redux/actionCreators/actionCreatorVacantion';
import VacantionCard from './VacantionCard'
function Vacantions(props) {
  const vacantion = useSelector(state=>state.vacantion)
  console.log(vacantion);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/vacantion`)
    .then(res=>res.json())
    .then(data=>dispatch(initVacantionAC(data)))
   }, [dispatch])
  return (
    <>
    <div className="vacantion container d-flex flex-column flex-wrap">
     
      <Link to='/vacantionsForm' className="nav-link"> <button>Add Form</button> </Link>
    </div>
    <div className='container d-flex flex-wrap'>
    {vacantion?.map(vac=>{
      return (
        
          <VacantionCard vacantion={vac} key={vac._id}/>
        
      )
    })}
    </div>
    </>
  );
}

export default Vacantions;
