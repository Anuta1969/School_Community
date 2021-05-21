import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Organization from '../Organization/Organization';
import OrganizationAddForm from '../OrganizationAddForm/OrganizationAddForm';
import { thunkOrgListInit } from '../../redux/Thunk/ThunkOrganization'
import { ThunkInitVacantion } from '../../redux/Thunk/VacantionThunk';
import './OrganizationList.css'

function OrganizationList() {
  const sortInput = useRef()
  const organization = useSelector(state => state.organization)
  const dispatch = useDispatch();
  const [newOrgState, setNewOrgState] = useState(organization)

let plusId = ''

  useEffect(() => {
    dispatch(thunkOrgListInit())
    dispatch(ThunkInitVacantion())
  }, [dispatch])

   useEffect(() => {
     setNewOrgState(() => organization)
  }, [organization])



  const sortHandler = (e) => {
    e.preventDefault()
     plusId = Date.now()
    if (sortInput.current.value === 'увеличению рейтинга') {
      setNewOrgState(()=>[...newOrgState].sort((a, b) => (a.totalRating - b.totalRating)))
    } else if (sortInput.current.value === 'уменьшению рейтинга') {
      setNewOrgState(()=>[...newOrgState].sort((a, b) => (b.totalRating - a.totalRating)))
    } else if (sortInput.current.value == 'умолчанию')
      setNewOrgState(organization)
   }

 return (
    <>
      <OrganizationAddForm />
        <div className='sort'>
          Сортировать по:
          <select onChange={sortHandler} ref={sortInput} className='selectSort '>
            <option>умолчанию</option>
            <option>увеличению рейтинга</option>
            <option>уменьшению рейтинга</option>
          </select>
        </div>
       <div className="container d-flex flex-wrap mt-5">
        <div className='orgList'>
       { newOrgState instanceof Array
        ? newOrgState?.map(( el,i ) => <Organization org={el} rate={el.totalRating} ind={i} id={el._id} key={el._id + i}  />)
        : null }
        </div>
      </div>
     </>
  );
}

export default OrganizationList;
