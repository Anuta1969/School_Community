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
                <h5 className="searchInput">{wanted?.name}</h5>
                <h5 className="searchInput">{wanted?.lastName}</h5>
                <h5 className="searchInput">{wanted?.group}</h5>
                <h5 className="searchInput">{wanted?.year}</h5>
                <h5 className="searchInput">{wanted?.city}</h5>
            </div>
        </>
    );
}

export default SearchStudent;
