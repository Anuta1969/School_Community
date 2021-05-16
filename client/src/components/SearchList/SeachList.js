import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import './SearchList.css'
import {initAllStudentsAC} from "../../redux/actionCreators/actionCreatorStudent";
import SearchStudent from "../SearchStudent/SearchStudent";


function SearchList(props) {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search)

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_URL}/student/inits`)
            .then(({data:{list}})=>dispatch(initAllStudentsAC(list)))
            .catch(err => console.log(err))
    },[dispatch])

    return (
        <>
            <div className='search'>
                <div className='searchList'>
                    {search.filter.length>0? search.filter?.map(el =><SearchStudent key={el._id} wanted = {el} /> )
                        :
                        search.all?.map(el =><SearchStudent key={el._id} wanted = {el} />)
                    }
                </div>
            </div>
        </>
    );
}

export default SearchList;
