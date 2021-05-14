import React, {useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {initRequestStudentParamsAC} from "../../redux/actionCreators/actionCreatorAdmin";

function RequestStudent(props) {

    const history  = useHistory()
    const dispatch = useDispatch()
    const {id} = useParams()
    const admin = useSelector(state => state.admin).filter(el =>el._id ==id)[0]
    useEffect(()=>{
        axios.get(`/admin/student/${id}`)
            // .then(data => console.log(data))
            .then(({data:{student}})=>dispatch(initRequestStudentParamsAC([student])))
            .catch(err => console.log(err))
    },[dispatch])


    const applyHandler =(e)=>{
        e.preventDefault()
            axios.post(`/admin/student/${id}`)
            .then(data => console.log(data))
            .then(el => history.push('/'))
            .catch(err => console.log(err))
    }

    const delHandler =(e)=>{
        e.preventDefault()
        axios.delete(`/admin/student/${id}`)
            .then(data => console.log(data))
            .then(el => history.push('/'))
            .catch(err => console.log(err))

    }
    console.log(admin)
    return (
        <>
            <div>RequestForm</div>
            <div className="cardInfo">
                <img src= {`/img/${admin?.photo}`} />
                <h5 className="item-title">{admin?.email}</h5>
                <h5 className="item-price">{admin?.name}</h5>
                <h5 className="item-price">{admin?.phone}</h5>
                <button onClick={applyHandler} className='btnAdmin'>Принять</button>
                <button onClick={delHandler} className='btnAdmin'>Отклонить</button>
            </div>
        </>
    );
}

export default RequestStudent;
