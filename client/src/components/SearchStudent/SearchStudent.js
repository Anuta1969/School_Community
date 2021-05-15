import React from 'react';
import './SearchStudent.css'
import {useHistory} from "react-router-dom";

function SearchStudent({wanted}) {
    const history = useHistory()

    const openHandler = ()=>{
        const id = wanted._id
        history.push(`/profile/${id}`)
    }


    return (
        <>
            <div onClick={openHandler} className="searchStudentCard">
                <img id='imgSearch' src= {`${process.env.REACT_APP_URL}/img/${wanted?.photo}`}/>
                <h5 className="searchInput">{wanted?.email}</h5>
                <h5 className="searchInput">{wanted?.name}</h5>
                <h5 className="searchInput">{wanted?.phone}</h5>
                <h5 className="searchInput">{wanted?.phone}</h5>

            </div>
        </>
    );
}

export default SearchStudent;
