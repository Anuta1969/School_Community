import React, {useState} from 'react';

import SearchForm from "../SearchForm/SearchForm";
import SeachList from "../SearchList/SeachList";
import { useSelector} from "react-redux";

function Posts(props) {

    return (
        <div className='searchPage'>
            <SearchForm  />
            <SeachList/>
        </div>
    );
}

export default Posts;
