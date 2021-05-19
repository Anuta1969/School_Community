import React from 'react';
import './SearchStudent.css'
import {useHistory} from "react-router-dom";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

function SearchStudent({wanted}) {
  const {id} = useParams()
  const student = useSelector((state) => state.search.all).filter(student => student._id === id)[0]
 const idAdmin = useSelector((state)=>state.search.all).filter(student => student.admin === true)[0]._id
    const history = useHistory()
console.log(idAdmin);
    const openHandler = () => {
        const id = wanted._id
        history.push(`/profile/${id}`)
    }

    return (
        <>
            <div onClick={openHandler} className="searchStudentCard">
                <img className='imgSearch' src={`${process.env.REACT_APP_URL}/img/${wanted?.photo}`}/>
                <h5 className="searchInput">Имя: {wanted?.name}</h5>
                <h5 className="searchInput">Фамилия: {wanted?.lastName}</h5>
               {idAdmin == wanted._id ? null : <h5 className="searchInput">Группа: {wanted?.group}</h5>}
                {idAdmin == wanted._id ? null : <h5 className="searchInput">Год учебы: {wanted?.year}</h5>}
                {idAdmin == wanted._id ? null :<h5 className="searchInput">Город: {wanted?.city}</h5>}
                {idAdmin != wanted._id ? null : <h5 className="searchInput">Статус: администратор</h5>}
            </div>
        </>
    );
}

export default SearchStudent;
