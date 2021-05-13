import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import RequestStudent from "./RequestStudent";
import {initRequestStudentsAC} from "../redux/actionCreators/actionCreatorAdmin";



function AdminList(props) {
    const admin = useSelector(state => state.admin)
    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get('/admin/request')
            // .then(data => console.log(data))
            .then(({data:{result}}) => dispatch(initRequestStudentsAC(result)))
            .catch((err) => console.log(err))

    },[dispatch])


    return (
        <>
            <div className='adminListTitle'>
            <h3>AdminList</h3>
            <div className='adminList'>
                {admin?.map(el => <RequestStudent key={el._id} student ={el}/>)}
            </div>
            </div>

        </>
    );
}

export default AdminList;
