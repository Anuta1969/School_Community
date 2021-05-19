import React, { useState } from 'react';
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/actionCreators/actionCreatorAuth";
import{sideBarAdmin,sideBarUser,login} from './NavLink'
import './Nav.css'
function Nav(props) {
    const isAuth = useSelector(state => state.student.isAuth)
    const dispatch = useDispatch()
    const admin = useSelector(state => state.student.admin)
    const student = useSelector(state => state.student)
    const [activeclass,setActiveClass] = useState(sideBarAdmin)
    const [activeclassUser,setActiveClassUser] = useState(sideBarUser)
    const [activeclassLogin,setActiveclassLogin] = useState(login)
    const classHandler = (name)=>{
        setActiveClass(activeclass.map(el=>el.name===name?
            {...el,current:true}:{...el,current:false}))
    }
    const classHandlerUser = (name)=>{
        setActiveClassUser(activeclassUser.map(el=>el.name===name?
            {...el,current:true}:{...el,current:false}))
    }
    const classHandlerLogin = (name)=>{
        setActiveclassLogin(activeclassLogin.map(el=>el.name===name?
            {...el,current:true}:{...el,current:false}))
    }
    return (
        <>
            <div className='backe'>
                {admin ?
                    <nav className="navbar navbar-expand-lg navbar-light bg-light container d-flex navs">
                        <ul className="navbar-nav container d-flex justify-content-between">
                            <img id='logo_elrus' src={`${process.env.REACT_APP_URL}/elbruss.svg`}/>
                            <div className='navbar-nav container d-flex justify-content-between nav_div'>
                                {admin && activeclass.map(el=>{
                                    return (
                                        <li className="nav-item">
                                            <Link onClick={()=>classHandler(el.name)} to={el.name==='Профиль'?`${el.url}/${student._id}`:el.url}
                                                  className={`nav-link  ${el.current?'active':''}`}>{el.name}</Link></li>
                                    )
                                })}
                            </div>
                            <div>
                                {admin && <li className="nav-item exit">
                                    <Link to='/' className="nav-link exit" onClick={() => dispatch(logout())}>Выход</Link></li>}
                            </div>
                        </ul>
                    </nav>
                    : null}
                {!admin ?
                    <nav className="navbar navbar-expand-lg navbar-light bg-light container navs">
                        <ul className="navbar-nav container d-flex justify-content-between">
                            {isAuth &&<img id='logo_elrus' src={`${process.env.REACT_APP_URL}/elbruss.svg`}/>}
                            <div className='navbar-nav container d-flex justify-content-between nav_div'>
                                {isAuth && activeclassUser.map(el=>{
                                    return (
                                        <li className="nav-item"><Link onClick={()=>classHandlerUser(el.name)}
                                                                       to={el.name==='Профиль'?`${el.url}/${student._id}`:el.url}
                                                                       className={`nav-link  ${el.current?'active':''}`}>{el.name}</Link></li>)
                                })}
                            </div>
                            <div>
                                {isAuth && <li className="nav-item exit">
                                    <Link to='/' className="nav-link exit"onClick={() => dispatch(logout())}>Выход</Link></li>}
                            </div>
                        </ul>
                    </nav> : null
                }
                {!admin && !isAuth?
                    <nav className="navbar navbar-expand-lg navbar-light bg-light container navs">
                        <div className='container d-flex justify-content-center'>
                            {!isAuth && activeclassLogin.map(login=>{
                                return(
                                    <li className="nav-item login_reg">
                                        <Link onClick={()=>classHandlerLogin(login.name)} to={login.url}
                                              className={`nav-link  ${login.current?'active':''}`}>{login.name} </Link></li>
                                )
                            })}
                        </div>
                    </nav>:null
                }
            </div>
        </>
    );
}
export default Nav;
