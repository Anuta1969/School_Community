import React from 'react';
import { Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actionCreators/actionCreatorAuth";

function Nav(props) {
    const isAuth = useSelector(state => state.student.currentStudent.isAuth)
    const dispatch = useDispatch()
    const admin = useSelector(state =>state.student.currentStudent.admin)

    return (
        <>
            {admin?
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        {admin &&
                        <li className="nav-item"><Link to='/adminList' className="nav-link">Заявки</Link></li>}
                        {admin &&
                        <li className="nav-item"><Link to='/vacantions' className="nav-link">Вакансии</Link></li>}
                        {admin &&
                        <li className="nav-item"><Link to='/search' className="nav-link">Поиск</Link></li>}
                        {admin &&
                        <li className="nav-item"><Link to='/statistics' className="nav-link">Статистика</Link></li>}
                        {admin &&
                        <li className="nav-item"><Link to='/organizations' className="nav-link">Организации</Link></li>}
                        {admin &&
                        <li className="nav-item"><Link to='/addOrganizations' className="nav-link">Добавить организацию</Link></li>}
                        {admin && <li className="nav-item"><Link to='/' className="nav-link"
                                                                  onClick={() => dispatch(logout())}>Выход</Link></li>}
                    </ul>
                </nav>
                :
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        {isAuth &&
                        <li className="nav-item"><Link to='/' className="nav-link">Профиль</Link></li>}
                        {isAuth &&
                        <li className="nav-item"><Link to='/' className="nav-link">Вакансии</Link></li>}
                        {isAuth &&
                        <li className="nav-item"><Link to='/' className="nav-link">Поиск</Link></li>}
                        {isAuth &&
                        <li className="nav-item"><Link to='/' className="nav-link">Организации</Link></li>}
                        {isAuth &&
                        <li className="nav-item"><Link to='/' className="nav-link">Добавить Организацию</Link></li>}

                        {isAuth && <li className="nav-item"><Link to='/' className="nav-link"
                                                                  onClick={() => dispatch(logout())}>Выход</Link></li>}
                        {!isAuth &&
                        <li className="nav-item"><Link to='/registration' className="nav-link">Регистрация</Link></li>}
                        {!isAuth && <li className="nav-item"><Link to='/' className="nav-link">Вход</Link></li>}
                    </ul>
                </nav>
            }
        </>
    );
}

export default Nav;
