import React from 'react';
import { Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actionCreators/actionCreator";

function Nav(props) {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                {isAuth && <li className="nav-item"><Link to='/posts' className="nav-link">Posts</Link></li>}
                {isAuth && <li className="nav-item"><Link to='/profile' className="nav-link">Profile</Link></li>}
                {isAuth && <li className="nav-item"><Link to = '/' className="nav-link" onClick={()=>dispatch(logout())}>logout</Link></li>}
                {!isAuth && <li className="nav-item"><Link to='/registration' className="nav-link">Register</Link></li>}
                {!isAuth && <li className="nav-item"><Link to = '/' className="nav-link">Login</Link></li>}
            </ul>
        </nav>
    );
}

export default Nav;
