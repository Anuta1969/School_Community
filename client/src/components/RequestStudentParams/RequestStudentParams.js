import {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './RequestStudentParams.css'

import {thunkApplyStudentRequest, thunkDelStudentRequest, thunkInitRequestStudent} from "../../redux/Thunk/ThunkAdmin";

function RequestStudent(props) {

    const dispatch = useDispatch()
    const {id} = useParams()
    const admin = useSelector(state => state.admin).filter(el => el._id === id)[0]

    useEffect(() => {
        dispatch(thunkInitRequestStudent(id))
    }, [dispatch])

    const applyHandler = (e) => {
        e.preventDefault()
        dispatch(thunkApplyStudentRequest(id))
        window.location.href = '/'
    }

    const delHandler = (e) => {
        e.preventDefault()
        dispatch(thunkDelStudentRequest(id))
        window.location.href = '/'
    }

    return (
        <>
            <div className='requestForm'>
            <div className="cardInfo">
                <div className='paramsImg'><img src={`${process.env.REACT_APP_URL}/img/${admin?.photo}`}/></div>
                <div className='paramsInfo'>
                <h5 className="params-h5">{admin?.email}</h5>
                <h5 className="params-h5">{admin?.name}</h5>
                <h5 className="params-h5">{admin?.phone}</h5>
                <h5 className="params-h5">{admin?.year}</h5>
                <h5 className="params-h5">{admin?.group}</h5>
                <h5 className="params-h5">{admin?.city}</h5>
                <div className='btnBlockAdmin'>
                <button onClick={delHandler} className='btnAdminCancel'>Отклонить</button>
                <button onClick={applyHandler} className='btnAdminApply'>Принять</button>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default RequestStudent;
