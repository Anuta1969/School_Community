import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Organization from '../Organization/Organization';
import OrganizationAddForm from '../OrganizationAddForm/OrganizationAddForm';
import { thunkOrgListInit } from '../../redux/Thunk/ThunkOrganization'
import { ThunkInitVacantion } from '../../redux/Thunk/VacantionThunk';


function OrganizationList() {
  const sortInput = useRef()
  const organization = useSelector(state => state.organization)
  const dispatch = useDispatch();
  const [newState, setNewState] = useState(null)
  const [newOrgState, setNewOrgState] = useState(null)
  const [newVacState, setNewVacState] = useState(null)
  
  useEffect(() => {
    dispatch(thunkOrgListInit())
    dispatch(ThunkInitVacantion())
  }, [dispatch])
   
   useEffect(() => {
     setNewOrgState(() => organization)
  }, [organization])
    
 
  const sortHandler = (e) => {
    e.preventDefault()
    if (sortInput.current.value === 'увеличению рейтинга') {
      setNewState(()=>[...organization].sort((a, b) => (a.rate - b.rate)))
    } else if (sortInput.current.value === 'уменьшению рейтинга') {
      setNewState(()=>[...organization].sort((a, b) => (b.rate - a.rate)))
    } else if (sortInput.current.value == 'по умолчанию')
      setNewState(organization)
   }

 return (
    <>
      <OrganizationAddForm />
        <div className='sort'>
          Сортировать по:
          <select onChange={sortHandler} ref={sortInput} className='selectSort'>
            <option>умолчанию</option>
            <option>увеличению рейтинга</option>
            <option>уменьшению рейтинга</option>
          </select>
        </div>
       <div className="container d-flex flex-wrap mt-5">
     
       { newOrgState instanceof Array  
        ? newOrgState?.map(( el,i ) => <Organization org={el} ind={i} id={el._id} key={el._id}  />)
        : null }

      </div>
     </>
  );
}

export default OrganizationList;
