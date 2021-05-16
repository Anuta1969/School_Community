import React from 'react';

import SearchForm from "../SearchForm/SearchForm";
import SeachList from "../SearchList/SeachList";

function Posts(props) {

    return (
        <div className='searchPage'>
            <SearchForm/>
            <SeachList/>
        </div>
    );
}

export default Posts;
