import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function SearchForm(props) {
    const search = useSelector(state => state.search)
    const dispatch = useDispatch()

    return (
        <>
        <div className='searchComponent'>
          <h3>Поиск студента</h3>
            <div className='searchForm'>
                <input type="text"/>
                <input type="text"/>

            </div>
        </div>
        </>
    );
}

export default SearchForm;
