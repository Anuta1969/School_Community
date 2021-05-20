import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './SearchList.css'
import SearchStudent from "../SearchStudent/SearchStudent";
import {thunkInitStudents} from '../../redux/Thunk/ThunkSearch';

function SearchList(props) {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search)
    // const [state,setState] = useState(search)
    useEffect(() => {
        dispatch(thunkInitStudents())
    }, [dispatch])

    // useEffect(()=>{
    //     setState(search)
    // },[search])

    const [number, setNumber] = useState(10)
    const searchAll = search.all.slice(0,number)


    const [filter, setFilter] = useState(10)
    const searchFilter = search.filter.slice(0,filter)

    const searchWotchHandler=()=>{
      setNumber(number+8)
      setFilter(filter+8)

    }

    return (
        <>
            <div className='search'>
                <div className='searchList'>
                    {search.filter.length > 0 ? searchFilter?.map(el => <SearchStudent key={el._id} wanted={el}/>)
                        :
                        searchAll?.map(el => <SearchStudent key={el._id} wanted={el} searchAll={searchAll}/>)
                    }
                </div>
              {searchAll.length== number || search.filter.length ==filter ? <button className="btnSearch" onClick={searchWotchHandler}>еще</button> : null}
            </div>
        </>
    );
}

export default SearchList;
