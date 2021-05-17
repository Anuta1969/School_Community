import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {ThunkInitVacantion} from '../../redux/Thunk/VacantionThunk';
import VacantionCard from './VacantionCard'

function Vacantions(props) {

    const vacantion = useSelector(state => state.vacantion)
    const dispatch = useDispatch();
    const[newState,setNewState] = useState(null)

    useEffect(() => {
        dispatch(ThunkInitVacantion())
    }, [dispatch])

    useEffect(() => {
      setNewState(() => vacantion)
    }, [vacantion])

    return (
        <>
            <div className="vacantion container d-flex flex-column flex-wrap">
                <Link to='/vacantionsForm' className="nav-link">
                    <button>Add Form</button>
                </Link>
            </div>
            <div className='container d-flex flex-wrap'>
                {newState?.map(vac => <VacantionCard vacantion={vac} key={vac._id}/>)}
            </div>
        </>
    );
}

export default Vacantions;
