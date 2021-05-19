import React from 'react';
import './SearchStudent.css'
import {useHistory} from "react-router-dom";

function SearchStudent({wanted}) {

    const history = useHistory()

    const openHandler = () => {
        const id = wanted._id
        history.push(`/profile/${id}`)
    }

    return (
        <>
            <div onClick={openHandler} className="searchStudentCard">
                <img id='imgSearch' src={`${process.env.REACT_APP_URL}/img/${wanted?.photo}`}/>
                <h5 className="searchInput">Имя: {wanted?.name}</h5>
                <h5 className="searchInput">Фамилия: {wanted?.lastName}</h5>
                <h5 className="searchInput">Группа: {wanted?.group}</h5>
                <h5 className="searchInput">Год учебы: {wanted?.year}</h5>
                <h5 className="searchInput">Город: {wanted?.city}</h5>
            </div>
        </>
    );
}

export default SearchStudent;
