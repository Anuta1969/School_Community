import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {ThunkInitVacantion} from '../../redux/Thunk/VacantionThunk';
import VacantionCard from './VacantionCard'
import axios from "axios";
import Organization from "../Organization/Organization";

function Vacantions(props) {
    const sortInput = useRef()
    const vacantion = useSelector(state => state.vacantion)
    const dispatch = useDispatch();
    const [newState, setNewState] = useState(null)

    useEffect(() => {
        dispatch(ThunkInitVacantion())
    }, [dispatch])

    useEffect(() => {
        setNewState(() => vacantion)
    }, [vacantion])

    const sortHandler = (e) => {
        e.preventDefault()
        if (sortInput.current.value === 'увеличению зарплаты') {
            setNewState(()=>[...vacantion].sort((a, b) => (a.salary - b.salary)))
        } else if (sortInput.current.value === 'уменьшению зарплаты') {
            setNewState(()=>[...vacantion].sort((a, b) => (b.salary - a.salary)))
        } else if (sortInput.current.value == 'по умолчанию')
            setNewState(vacantion)
    }

    return (
        <>
            <div className="vacantion container d-flex flex-column flex-wrap">
                <Link to='/vacantionsForm' className="nav-link">
                    <button>Add Form</button>
                </Link>
            </div>

            <div className='sort'>
                Сортировать по:
                <select onChange={sortHandler} ref={sortInput} className='selectSort'>
                    <option>умолчанию</option>
                    <option>увеличению зарплаты</option>
                    <option>уменьшению зарплаты</option>
                </select>
            </div>

            <div className='container d-flex flex-wrap'>
                {newState?.map(vac => <VacantionCard vacantion={vac} key={vac._id}/>)}
            </div>
        </>
    );
}

export default Vacantions;

// const [newState, setNewState] = useState(null)
// const sortInput = useRef()
//
//
// useEffect(() => {
//     setNewState(() => organization)
// }, [organization])
//
// const sortHandler = (e) => {
//     e.preventDefault()
//     if (sortInput.current.value === 'увеличению рейтинга') {
//         setNewState(()=>[...organization].sort((a, b) => (a.rate - b.rate)))
//     } else if (sortInput.current.value === 'уменьшению рейтинга') {
//         setNewState(()=>[...organization].sort((a, b) => (b.rate - a.rate)))
//     } else if (sortInput.current.value == 'по умолчанию')
//         setNewState(organization)
// }
//
// <div className='sort'>
//     Сортировать по:
//     <select onChange={sortHandler} ref={sortInput} className='selectSort'>
//         <option>умолчанию</option>
//         <option>увеличению рейтинга</option>
//         <option>уменьшению рейтинга</option>
//     </select>

// { newState?.map((el,i ) => <Organization org={el} ind={i}id={el._id} key={el._id} />) }


// </div>
