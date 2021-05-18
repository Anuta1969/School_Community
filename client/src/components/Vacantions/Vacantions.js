import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {ThunkInitVacantion} from '../../redux/Thunk/VacantionThunk';
import VacantionCard from './VacantionCard'
import './Vacantion.css'

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
        } else if (sortInput.current.value == 'новизне')
            setNewState(vacantion)
    }

    return (
        <div className='vacantion_container container m-auto justify-content-center d-flex flex-column'>
            <div className="vacantion container d-flex flex-column flex-wrap">
                <Link to='/vacantionsForm' className="nav-link">
                    <button>Добавить ваканисю</button>
                </Link>
            </div>

            <div className='sort'>
                Сортировать по:
                <select onChange={sortHandler} ref={sortInput} className='selectSort'>
                    <option>новизне</option>
                    <option>увеличению зарплаты</option>
                    <option>уменьшению зарплаты</option>
                </select>
            </div>



            <div className='vacantion container d-flex flex-wrap  m-auto text-center justify-content-between'>
                {newState?.map(vac => <VacantionCard vacantion={vac} key={vac._id}/>)}
            </div>
        </div>
    );
}

export default Vacantions;
