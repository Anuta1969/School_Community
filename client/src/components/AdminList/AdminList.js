import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import RequestStudent from "../RequestStudent/RequestStudent";
import {thunkAdminList} from "../../redux/Thunk/ThunkAdmin";
import './AdminList.css'

function AdminList(props) {
    const admin = useSelector(state => state.admin)
    console.log(admin);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(thunkAdminList())
    }, [dispatch])


    return (
        <>
            <div className='adminListTitle'>
                <h3>Заявки</h3>
                <div className='adminList'>
                    {admin?.map(el => <RequestStudent key={el._id} student={el}/>)}
                </div>
            </div>
        </>
    );
}

export default AdminList;
