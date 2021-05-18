import React, { useState } from 'react';
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/actionCreators/actionCreatorAuth";
import{sideBarAdmin,sideBarUser} from './NavLink'
import './Nav.css'
function Nav(props) {
    const isAuth = useSelector(state => state.student.isAuth)
    const dispatch = useDispatch()
    const admin = useSelector(state => state.student.admin)
    const student = useSelector(state => state.student)
    const [activeclass,setActiveClass] = useState(sideBarAdmin)
    const [activeclassUser,setActiveClassUser] = useState(sideBarUser)
const classHandler = (name)=>{
setActiveClass(activeclass.map(el=>el.name===name?
  {...el,current:true}:{...el,current:false}))
}
const classHandlerUser = (name)=>{
  setActiveClassUser(activeclassUser.map(el=>el.name===name?
    {...el,current:true}:{...el,current:false}))
  }
    return (
        <div className='backe'>
            {admin ?
                <nav className="navbar navbar-expand-lg navbar-light bg-light container d-flex navs">
                    <ul className="navbar-nav container d-flex justify-content-between">
                        {admin && activeclass.map(el=>{
                          return (
                            <li className="nav-item">
                              <Link onClick={()=>classHandler(el.name)} to={el.url}
                              className={`nav-link  ${el.current?'active':''}`}>{el.name}</Link></li>
                          )
                        })}
                        {admin && <li className="nav-item">
                          <Link to='/' className="nav-link" onClick={() => dispatch(logout())}>Выход</Link></li>}
                    </ul>
                </nav>
                : null}
            {!admin ?
                <nav className="navbar navbar-expand-lg navbar-light bg-light container navs">
                    <ul className="navbar-nav container d-flex justify-content-between">
                        {isAuth && activeclassUser.map(el=>{
                          return (
                            <li className="nav-item"><Link onClick={()=>classHandlerUser(el.name)}
                            to={el.name==='Профиль'?el.url+student._id:el.url}
                            className={`nav-link  ${el.current?'active':''}`}>{el.name}</Link></li>)
                        })}
                        {isAuth && <li className="nav-item">
                          <Link to='/' className="nav-link"onClick={() => dispatch(logout())}>Выход</Link></li>}
                        {!isAuth &&
                        <li className="nav-item"><Link to='/registration' className="nav-link">Регистрация</Link></li>}
                        {!isAuth && <li className="nav-item"><Link to='/' className="nav-link">Вход</Link></li>}
                    </ul>
                </nav> : null
            }
        </div>
    );
}
export default Nav;
