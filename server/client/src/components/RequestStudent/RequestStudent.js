import React from 'react';
import {useHistory} from "react-router-dom";
import './RequestStudent.css'

function RequestStudent({student}) {

    const history = useHistory()

    const openHandler = () => {
        const id = student._id
        history.push(`/admin/student/${id}`)
    }

    return (
        <>
            <div onClick={openHandler} className="cardInfo">
                <img id='imgRequest' src={`${process.env.REACT_APP_URL}/img/${student?.photo}`}/>
                <h5 className="item-title">{student?.email}</h5>
                <h5 className="item-price">{student?.name}</h5>
                <h5 className="item-price">{student?.phone}</h5>
            </div>
        </>
    );
}

export default RequestStudent;
