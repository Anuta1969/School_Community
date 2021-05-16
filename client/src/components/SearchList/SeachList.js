import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './SearchList.css'

import SearchStudent from "../SearchStudent/SearchStudent";
import { thunkInitStudents } from '../../redux/Thunk/ThunkSearch';


function SearchList(props) {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search)

    useEffect(()=>{
  
      dispatch(thunkInitStudents())
      
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
