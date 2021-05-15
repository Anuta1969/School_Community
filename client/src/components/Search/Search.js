import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import './SearchList.css'
import {initAllStudentsAC} from "../../redux/actionCreators/actionCreatorStudent";
import SearchStudent from "../SearchStudent/SearchStudent";

function Search(props) {
    const dispatch = useDispatch()
    const student = useSelector(state => state.student)
    const search = useSelector(state => state.search)
    console.log(search)
    console.log(student)
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_URL}/student/inits`)
            // .then(data =>console.log(data))
            .then(({data:{list}})=>dispatch(initAllStudentsAC(list)))
            .catch(err => console.log(err))
    },[dispatch])

    return (
        <>
            <div className='search'>
        <div>Поиск</div>
                <div className='searchList'>
                    {search?.map(el =><SearchStudent key={el._id} wanted = {el} /> )}
                </div>
            </div>
        </>
    );
}

export default Search;
