import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {thunkLogin} from "../../redux/Thunk/ThunkAuth";
import './Registration.css'

function Login(props) {
    const dispatch = useDispatch()

    const loginHandler = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        dispatch(thunkLogin(email, password))
    }

    return (
        <>
        <div className='login'>

            <div className="registr__form">
            <form className='formRegister' onSubmit={loginHandler} method='POST'>
                <h3>Вход</h3>
                <input className='inputRegister' name='email' type="text" placeholder='Введите почту' />
                <input className='inputRegister' name='password'  type="password" placeholder='Введите пароль'/>
                <button className='btnRegister'>Вход</button>
            </form>
        </div>
        </div>
        </>
    );
}

export default Login;
